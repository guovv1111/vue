<template>
    <div id="app">
        <router-link to="/escript">test</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message:'指令绑定的值'
        }
    },
    mounted() {
        console.log('全局注册方法：', this.getData());
    }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
