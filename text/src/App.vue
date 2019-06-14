<template>
  <div id="app">
    <!-- 只有detail不被缓存 -->
      <keep-alive >
      <!-- 显示的是当前路由地址所对应的内容 -->
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
