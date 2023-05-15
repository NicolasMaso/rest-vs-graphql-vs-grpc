import { CacheGateway } from '../../../domain/gateway/cache.gateway'

export class MemoryCacheService implements CacheGateway {
  save(key: string, value: any): Promise<void> {
    throw new Error('Method not implemented.')
  }
  remove(key: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  removeMany(pattern: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  search(key: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
  searchKeys(pattern: string): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
  searchMany(pattern: string): Promise<any[]> {
    throw new Error('Method not implemented.')
  }
  reset(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
