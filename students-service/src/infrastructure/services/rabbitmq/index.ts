import amqp from 'amqplib';
import { env } from '~/shared/env';
import { IMessagingService } from '~/application/services/messaging';

type TExchangeTypes = 'direct' | 'topic' | 'fanout ' | 'headers ';

export class AmqpMessagingService implements IMessagingService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  public async connect(): Promise<void> {
    this.connection = await amqp.connect({
      hostname: env.rabbitmq_host,
      port: env.rabbitmq_port,
      username: env.rabbitmq_user,
      password: env.rabbitmq_pass,
    });

    this.channel = await this.connection.createChannel();
  }

  public async publishInQueue(
    queueName: string,
    message: string
  ): Promise<boolean> {
    const messageToQueue = Buffer.from(JSON.stringify(message));

    await this.channel.assertQueue(queueName, { durable: true });

    return this.channel.sendToQueue(queueName, messageToQueue);
  }

  public async publishInExchange(
    exchange: string,
    routingKey: string,
    message: any,
    type?: TExchangeTypes
  ): Promise<boolean> {
    const messageToExchange = Buffer.from(JSON.stringify(message));

    await this.channel.assertExchange(exchange, type, { durable: true });

    return this.channel.publish(exchange, routingKey, messageToExchange);
  }

  public async consume(
    queueName: string,
    callback: (message: amqp.Message) => void
  ): Promise<void> {
    await this.channel.assertQueue(queueName, { durable: true });

    this.channel.prefetch(10);

    this.channel.consume(queueName, (queueMessage) => {
      if (queueMessage !== null) {
        const message = JSON.parse(queueMessage.content.toString());
        callback(message);
        this.channel.ack(queueMessage);
      }
    });
  }

  public async close(): Promise<void> {
    await this.channel.close();
    await this.connection.close();
  }
}
