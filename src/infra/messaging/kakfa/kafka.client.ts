import { ConfigModule } from '@nestjs/config'
import { KafkaConfig } from '@nestjs/microservices/external/kafka.interface'

ConfigModule.forRoot()
export const kafkaConfig: KafkaConfig = {
  clientId: 'dgc-examples',
  brokers: [process.env.KAFKA_BROKER || ''],
  sasl: {
    mechanism: 'scram-sha-256',
    username: process.env.KAFKA_USER || '',
    password: process.env.KAFKA_PASS || ''
  },
  ssl: true
}
