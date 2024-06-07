import http from "k6/http";
import { check } from 'k6'

export const options = {
  vus: 1,
  duration: '30s',
};

let id = 1013530

export default function () {
  id += 1
  const mutation = `
    mutation edit_movie {
      edit_movie(movie_id: ${id}, movie_input: { name:"Novo Filme Atualizado GraphQL 2", date: 2024, tagline: "Slogan Atualizado Teste GraphQL", description: "Novo Filme GraphQL", minute: 120, rating: 5}) {
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
