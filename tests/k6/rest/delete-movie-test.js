import http from 'k6/http'
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

let id = 1018536

export default function () {
  id += 1
  let res = http.del(`http://localhost:3000/movies/${id}`)
  check(res, { 'success': (r) => r.status === 200 })
}
