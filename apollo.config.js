export default function (ctx) {
  return {
    httpEndpoint: process.server ? `http://localhost:3000/api/graphql` : `/api/graphql`,
    httpLinkOptions: {
      headers: {
        'content-type': 'application/json',
      },
    },
  };
}
