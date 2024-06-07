import http from 'k6/http'
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

let id = 1013530

export default function () {
  const body = {
    name: 'Filme Teste Atualizado REST 3',
    date: 2024,
    tagline: 'Slogan Teste Atualizado REST',
    description: 'Descrição Teste Atualizado REST',
    minute: 140,
    rating: 4
  }
  id += 1
  let res = http.put(`http://localhost:3000/movies/${id}`, JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  })
  check(res, { 'success': (r) => r.status === 200 })
}
