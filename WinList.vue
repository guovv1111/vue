<template>
	<div class="winer-list" :style="{ backgroundImage: `url(${ props.winnerBg })` }">
        <div ref="myRef" :class="{ anim: animate === true }">
            <div v-for="(item,i) in animateList" :key="i">
                <div class="slide-text">{{ hideName(item.username) }}获得{{ item.rewardNum }}{{ item.awardName }}</div>
            </div>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { RotationRecordsItem } from '../types';

const myRef = ref<HTMLDivElement>();
const timer = ref(-1);
const animate = ref(false);
const animateList = ref<RotationRecordsItem[]>([
    {
        username: '',
        awardName: '',
        rewardNum: ''
    }
]);

const props = defineProps<{
    winnerBg: string | undefined,
    rotationRecords: RotationRecordsItem[]
}>(); 

watch(() => props.rotationRecords, (val: RotationRecordsItem[]) => {
    if(val ) {
        animateList.value = val;
        // timer.value = setInterval(scroll, 500);
    }
});

function hideName(name: string) {
    if(name && name.length > 0) {
        return name.slice(0, 1) + '****';
    }
}

function scroll() {
    animate.value = !animate.value;
    (myRef.value as HTMLDivElement).style.marginTop = '-.42rem';
    setTimeout(function () {
        animateList.value?.push(animateList.value[0]);
        animateList.value?.shift();
        (myRef.value as HTMLDivElement).style.marginTop = '0';
        animate.value = !animate.value; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
   }, 1000);
}

onMounted(() => {
    animateList.value = props.rotationRecords;
    timer.value = setInterval(scroll, 2000);
});
</script>
<style lang="less" scoped>
.winer-list {
    width: 4.86rem;
    height: .42rem;
    background-size: 100% 100%;
    margin: 0 auto;
    overflow: hidden;
    transition: all 1s;
}

.slide-text {
    font-size: .2rem;
    height: .42rem;
    line-height: .42rem;
    color: #fff;
    opacity: .7;
    padding: 0 .1rem;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.anim {
    transition: all 1s;
}
</style>