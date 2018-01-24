<template>
  <div id="app">
    <div id="main">
        <nuxt />
        <v-nav />
    </div>
  </div>
</template>

<script>
import vNav from '../components/nav.vue'
export default {
  components: {
    vNav
  }
}
</script>

<style>

</style>
