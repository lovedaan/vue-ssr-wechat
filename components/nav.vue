<template>
    <nav id="nav">
        <nuxt-link class="navLink" v-for="(item, index) in navList" :key="index" :to="item.path">
            <p>{{item.text}}</p>
        </nuxt-link>
    </nav>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      navList: [
        {
          path: '/',
          name: 'home',
          text: '热映'
        },
        {
          path: '/usbox',
          name: 'usbox',
          text: '排行'
        },
        {
          path: '/user',
          name: 'user',
          text: '我的'
        }
      ]
    }
  }
}
</script>
<style type="text/css">
    #nav{
        position: fixed;
        width: 100%;
        height: 50px;
        left: 0;
        bottom: 0;
        z-index:22;
        background:#ccc;
        display:flex;
    }
    #nav .navLink{
        flex:1;
        text-align: center;
        line-height:50px;
    }
</style>
