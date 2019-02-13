<template>
  <div id="app">
    <template-default></template-default>
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
