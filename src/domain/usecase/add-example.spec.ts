import { MemoryExamplesRepository } from '../../adapter/repository/memory/memory-examples.repository'
import { AddExample } from './add-example'

test('test', async () => {
  const addExample = new AddExample(new MemoryExamplesRepository)
  const examples = await addExample.execute()
  console.log('🚀 ~ file: get-examples.spec.ts:7 ~ test ~ examples', examples)
  expect(examples.length).toBe(1)
})