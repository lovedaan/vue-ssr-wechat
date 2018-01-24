<template>
  <section class="container">
    <h1 class="title">
      {{title}}
    </h1>
    <p>{{getCount}}</p>
    <button type="button" @click="changeCount">改变state中的count</button>
  </section>
</template>
<script type="text/javascript">
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    middleware: 'show',
    data() {
      return {
        title: 'hello'
      }
    },
    computed: {
      ...mapGetters(['getCount'])
    },
    mounted() {
      this.$store.dispatch('getMovieData').then(res => {
        console.log(res)
      })
    },
    methods: {
      changeCount() {
        this.handleCount(50)
      },
      ...mapMutations({
        handleCount: 'SETCOUNT'
      })
    }
  }
</script>
<style scoped>

</style>
