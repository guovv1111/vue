<template>
  <div class="hello">
    用户id：{{$route.params.userId}}
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      console.log(this.$route);
  }
}
</script>
