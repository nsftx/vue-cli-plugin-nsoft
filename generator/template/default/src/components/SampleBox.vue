<template>
  <div class="sample-box">
    NSoft Sample, random is {{randomInteger}}.
  </div>
</template>

<script>
import { random } from 'lodash';

export default {
  name: 'SampleBox',
  computed: {
    randomInteger() {
      return random(1, 10);
    },
  },
};
</script>

<style scoped lang="scss">
.sample-box {
  color: blue;
}
</style>
