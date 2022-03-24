<template>
    <div class="hello">
        路由跳转的四种方式：
        一、router-link
        <router-link to="/home/cur">Go to cur</router-link>
        <router-link to="/home/last">Go to last</router-link>
        <router-link to="/detail/2">带参数跳转detail</router-link>
        <router-link :to="'/detail/' + userID">带参数跳转detail</router-link>
        二、push
        <div @click="pushRout">push跳转</div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userID: 1212
    }
  },
    methods: {
        pushRout(){
            this.$router.push('/detail');
        }
    },
}
</script>
