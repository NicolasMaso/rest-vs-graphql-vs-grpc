import grpc from 'k6/net/grpc'
import { check } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

const client = new grpc.Client()
client.load(['../../../src/assets'], 'tcc.proto')

export default function () {
  client.connect('localhost:3001', { plaintext: true, maxReceiveSize: 60 * 1024 * 1024 })

  const data = { limit: '150000' }
  const response = client.invoke('tcc.TccService/listMovies', data)
  check(response, {
    'status is OK': (r) => r && r.status === grpc.StatusOK
  })
  client.close()
}
