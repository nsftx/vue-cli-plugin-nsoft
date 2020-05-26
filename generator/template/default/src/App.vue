<template>
  <div id="app">
    <h1>Welcome to Your Vue.js App</h1>
    <TemplateDefault></TemplateDefault>
  </div>
</template>

<script>
import TemplateDefault from '@/layouts/TemplateDefault';

export default {
  name: 'App',
  components: {
    TemplateDefault,
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
