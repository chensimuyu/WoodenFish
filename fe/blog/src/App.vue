<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    console.log('start')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
    line-height: 1.25;
  }
  body, h1, h2, h3, h4, h5, h6, ul, p{
    margin: 0;
    padding: 0;
  }
  div, header, section, article, aside, nav{
    box-sizing: border-box;
  }
  ul, ol{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #6E7173;
  }
  html,
  body,
  #app{
    height: 100%;
  }
</style>
