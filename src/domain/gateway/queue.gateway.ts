
export abstract class QueueGateway {
  abstract produce({ topic, data }: { topic: string, data: any}): void
}
