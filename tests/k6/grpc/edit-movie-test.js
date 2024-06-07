import grpc from 'k6/net/grpc'
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

const client = new grpc.Client()
client.load(['../../../src/assets'], 'tcc.proto')

let id = 1013530

export default function () {
  id += 1
  client.connect('localhost:3001', { plaintext: true, maxReceiveSize: 60 * 1024 * 1024 })
  const data = {   
    id,  
    name: 'Filme Teste Atualizado gRPC',
    date: 2024,
    tagline: 'Slogan Teste Atualizado gRPC',
    description: 'Descrição Teste Atualizado gRPC',
    minute: 120,
    rating: 5 
  }
  const response = client.invoke('tcc.TccService/editMovie', data)
  check(response, {
    'status is OK': (r) => r && r.status === grpc.StatusOK
  })
  client.close()
}
