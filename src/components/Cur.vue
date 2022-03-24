<template>
    <div class="hello">
        <div class="title">es6 导入</div>
        <div class="normal">(1) es6 export: {{ esData.name }} </div>
        <div class="normal">(2) es6 export default: {{ defaultData }}</div>
        <div class="warn">
            es6的导出和导入：
            导出：export default {} 和 export const A = {} 两者可以一起使用
            导入：import data  对应 export default{}; import {A, B} 对应 export A
        </div>
    </div>
</template>

<script>
import { esData } from '../es6/index';
import defaultData from '../es6/index';

export default {
  name: 'Home',
  data () {
    return {
        esData,
        defaultData
    }
  },
  mounted() {
    
  }
}
</script>
