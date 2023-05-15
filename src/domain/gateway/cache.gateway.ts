
export abstract class CacheGateway {
  abstract save(key: string, value: any): Promise<void>
  abstract remove(key: string): Promise<void>
  abstract removeMany(pattern: string): Promise<void>
  abstract search(key: string): Promise<any>
  abstract searchKeys(pattern: string): Promise<string[]>
  abstract searchMany(pattern: string): Promise<any[]>
  abstract reset(): Promise<void>
}
