import http from 'k6/http'
import { check } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  let res = http.get('http://localhost:3000/movies?limit=150000')
  check(res, { 'success': (r) => r.status === 200 })
}
