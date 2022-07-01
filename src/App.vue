<template>
  <div id="app">
    <header id="nav">
      <div class="nav-container">
        <router-link to="/">Vue</router-link> |
        <router-link to="/">Js</router-link> |
        <router-link to="/pack">Pack</router-link>
      </div>
    </header>
    <div id="blog-container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
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
