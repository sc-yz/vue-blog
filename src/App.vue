<template>
  <div id="app">
    <header id="nav">
      <div class="nav-container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about"> About </router-link>
      </div>
    </header>
    <div id="blog-container">
      <router-view />
    </div>
    <div @click="hello">hello</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: {
        name: 'waq',
      },
    };
  },
  methods: {
    hello() {
      this.$notification(123);
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  #nav {
    .nav-container {
      max-width: 1200px;
      margin: auto;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
  #blog-container {
    max-width: 1200px;
    margin: auto;
  }
}
</style>
