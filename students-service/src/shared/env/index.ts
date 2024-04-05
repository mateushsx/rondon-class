import { config } from 'dotenv';
config();

export const env = {
  port: Number(process.env.PORT) || 3002,
  rabbitmq_port: Number(process.env.RABBITMQ_PORT) || 5672,
  rabbitmq_host: process.env.RABBITMQ_HOST || 'localhost',
  rabbitmq_user: process.env.RABBITMQ_USER || 'guest',
  rabbitmq_pass: process.env.RABBITMQ_PASS || 'guest',
};
