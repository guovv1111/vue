<template>
    <div id="app">
        <router-link to="/escript">test</router-link>
        <!-- <div v-demo:foo.a.b="message"></div>
        <p v-pin:left="200">Stick me 200px from the top of the page</p> -->
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
