<template>
  <div>
    <ClientOnly placeholder="Loading...">
      <GraphiQL :fetcher="fetcher" style="height: 500px" />
    </ClientOnly>
  </div>
</template>

<script>
import GraphiQL from 'graphiql';

export default {
  name: 'Test',

  components: {
    GraphiQL,
  },

  methods: {
    async fetcher(graphQLParams) {
      console.log('fetcher ----------------', graphQLParams);
      const data = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(graphQLParams),
        credentials: 'same-origin',
      });
      return data.json().catch(() => data.text());
    },
  },
};
</script>
