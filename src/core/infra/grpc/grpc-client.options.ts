import { ClientOptions, Transport } from '@nestjs/microservices'
import { resolve, join } from 'path'

const __dirname = resolve();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    maxReceiveMessageLength: 50 * 1024 * 1024,
    maxSendMessageLength: 50 * 1024 * 1024,
    package: ['tcc'],
    protoPath: [join(__dirname, './src/assets/tcc.proto')],
    loader: {
      keepCase: true
    },
    url: 'localhost:3001'
  }
}
