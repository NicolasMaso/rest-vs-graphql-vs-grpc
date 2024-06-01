import http from "k6/http";
import { sleep, check } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const query = `   
    query test {
      list_movies(limit: 400000) {
        id
        name
        date
        tagline
        description
        minute
        rating
      }
    }`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = http.post(
    "http://localhost:3000/graphql",
    JSON.stringify({ query: query }), { headers }
  );
  check(res, { 'success': (r) => r.status === 200 })
  sleep(0.3);
}
