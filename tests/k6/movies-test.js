// REST
// import http from 'k6/http'
// import { check, sleep } from 'k6'

// export default function () {
//   let res = http.get('http://localhost:3000/movies?limit=10000')

//   check(res, { 'success': (r) => r.status === 200 })

//   sleep(0.3)
// }

// GraphQL
// import http from "k6/http";
// import { sleep } from "k6";

// export default function () {
//   const query = `   
//     query test {
//       list_movies(limit: 10000) {
//         id
//         name
//         date
//         tagline
//         description
//         minute
//         rating
//       }
//     }`;

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const res = http.post(
//     "http://localhost:3000/graphql",
//     JSON.stringify({ query: query }), { headers }
//   );

//   if (res.status === 200) {
//     // console.log(JSON.stringify(res.body));
//   }

//   sleep(0.3);
// }


// gRPC
import grpc from 'k6/net/grpc'
import { sleep, check } from 'k6'

const client = new grpc.Client()
client.load(['../../src/assets'], 'tcc.proto')

export default function () {
  client.connect('localhost:3001', { plaintext: true, maxReceiveSize: 50 * 1024 * 1024 })

  const data = { limit: '1000000' }
  const response = client.invoke('tcc.TccService/listMovies', data)
  check(response, {
    'status is OK': (r) => r && r.status === grpc.StatusOK,
  })
  // console.log(JSON.stringify(response.message))
  // console.log(response)
  client.close()
  sleep(1)
}
