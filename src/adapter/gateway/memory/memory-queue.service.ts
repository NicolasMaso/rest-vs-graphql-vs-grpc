import { QueueGateway } from '../../../domain/gateway/queue.gateway'

export class MemoryQueueService implements QueueGateway {
  produce({ topic, data }: { topic: string; data: any; }): void {
    throw new Error('Method not implemented.')
  }
}
