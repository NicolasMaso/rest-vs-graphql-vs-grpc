import { Inject, Injectable } from '@nestjs/common'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { CacheGateway } from '../../domain/gateway/cache.gateway'

@Injectable()
export class RedisCacheService implements CacheGateway {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly redisClient: Cache
  ) {}

  async save(key: string, data: any): Promise<void>  {
    try {
      console.log(`Registrando cache ${key}: ${data}`)
      await this.redisClient.set(key, JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const filter = `*${key}*`
      const keys = await this.redisClient.store.keys(filter)
      if (!keys.length) { return }
      console.log(`Removendo cache: ${key}`)
      await this.redisClient.del(keys[0])
    } catch (error) {
      console.log(error)
    }
  }

  async removeMany(pattern: string): Promise<void> {
    try {
      const filter = `*${pattern}*`
      const keys = await this.redisClient.store.keys(filter)
      if (!keys.length) { return }
      console.log(`Removendo caches: ${keys}`)
      await this.redisClient.store.mdel(...keys)
    } catch (error) {
      console.log(error)
    }
  }

  async search(key: string): Promise<any> {
    try {
      const result = await this.redisClient.get(key) as string
      if (!result) { return null }
      return JSON.parse(result)
    } catch (error) {
      console.log(error)
    }
  }

  async searchKeys(pattern: string): Promise<string[]> {
    try {
      const filter = `*${pattern}*`
      const keys = await this.redisClient.store.keys(filter)
      if (!keys.length) { return [] }
      return keys
    } catch (error) {
      console.log(error)
    }
  }

  async searchMany(pattern: string): Promise<any[]> {
    try {
      const keys = await this.searchKeys(pattern)
      if (!keys.length) { return [] }
      const results = await this.redisClient.store.mget(...keys) as string[]
      if (!results.length) { return [] }
      return results.map(result => JSON.parse(result))
    } catch (error) {
      console.log(error)
    }
  }

  async reset() {
    await this.redisClient.reset()
  }
}
