import http from "k6/http";
import { check } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const mutation = `
    mutation add_movie {
      add_movie(movie_input:{ name:"Novo Filme GraphQL", date: 2024, tagline: "Slogan Teste GraphQL", description: "Novo Filme GraphQL", minute: 120, rating: 5}) {
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
  const res = http.post("http://localhost:3000/graphql", JSON.stringify({ query: mutation }), {
    headers
  });
  check(res, { 'success': (r) => r.status === 200 })
}
 