<template>
    <div class="hello">
        <div class="title">commonjs 导入</div>
        <div class="normal">arr:{{ arr }}</div>
        <div class="normal">arr2:{{ arr2 }}</div>
        
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            arr: [],
            arr2: []
        }
    },
    mounted() {
        let {arr, arr2}  = require('../commonjs/index');
        this.arr = arr;
        this.arr2 = arr2;
    }
}
</script>