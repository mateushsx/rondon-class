import { Message } from 'amqplib';

export interface IMessagingService {
  connect: () => Promise<void>;
  publishInQueue: (queueName: string, message: string) => Promise<boolean>;
  publishInExchange: (
    exchange: string,
    routingKey: string,
    message: any
  ) => Promise<boolean>;

  consume(
    queueName: string,
    callback: (message: Message) => void
  ): Promise<void>;
  close(): Promise<void>;
}
