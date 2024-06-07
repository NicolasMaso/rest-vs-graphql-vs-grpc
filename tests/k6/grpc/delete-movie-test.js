import grpc from 'k6/net/grpc'
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

const client = new grpc.Client()
client.load(['../../../src/assets'], 'tcc.proto')

let id = 1062735

export default function () {
  id += 1
  client.connect('localhost:3001', { plaintext: true, maxReceiveSize: 60 * 1024 * 1024 })
  const data = {   
    id
  }
  const response = client.invoke('tcc.TccService/deleteMovie', data)
  check(response, {
    'status is OK': (r) => r && r.status === grpc.StatusOK
  })
  client.close()
}
