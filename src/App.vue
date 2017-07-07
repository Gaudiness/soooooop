<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import 'font/iconfont.css';

::selection,
::-webkit-selection,
::-moz-selection {
  background: #ddd; 
  color: whtie;
}

html, body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  min-height: 500px;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
}

*{
  box-sizing: border-box;
}
</style>
