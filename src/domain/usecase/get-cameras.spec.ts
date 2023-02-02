import { MemoryCamerasRepository } from '../../adapter/repository/memory/memory-camera-repository'
import { GetCameras } from './get-cameras'

test('test', async () => {
  const getCameras = new GetCameras(new MemoryCamerasRepository)
  const cameras = await getCameras.execute()
  console.log('🚀 ~ file: get-cameras.spec.ts:7 ~ test ~ cameras', cameras)
  expect(cameras.length).toBe(1)
})