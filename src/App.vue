<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home/index.vue';

@Component({
  name: 'Root',
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'style/main';
</style>
