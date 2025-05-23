import http from "k6/http";
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

let id = 1041366

export default function () {
  id += 1
  const mutation = `
    mutation delete_movie {
      delete_movie(movie_id: ${id})
    }`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = http.post("http://localhost:3000/graphql", JSON.stringify({ query: mutation }), {
    headers
  });
  check(res, { 'success': (r) => r.status === 200 })
}
