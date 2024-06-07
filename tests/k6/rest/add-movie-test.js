import http from 'k6/http'
import { check } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const body = {
    name: 'Filme Teste Novo REST',
    date: 2024,
    tagline: 'Slogan Teste Novo REST',
    description: 'Descrição Teste Novo REST',
    minute: 120,
    rating: 5
  }
  let res = http.post('http://localhost:3000/movies', JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  })
  check(res, { 'success': (r) => r.status === 201 })
}
