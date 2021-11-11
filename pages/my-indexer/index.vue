<template>
  <div>
    <MyIndexerProjects v-if="$auth.loggedIn" />

    <MyIndexerHome v-else />
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
