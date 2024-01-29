<script setup>
import { ref } from 'vue'
import httpInstance from '@/utils/request';
import ShopInfo from '@/components/ShopInfo.vue';

const nearbyList = ref([])
const getHotList = async () => {
  const res = await httpInstance.get('api/shop/hot-list')
  nearbyList.value = res.data.data
}
getHotList()

</script>

<template>
  <!-- 附近店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <!-- 这里将遍历出来的item通过父传子的方式传递给子组件ShopInfo -->
    <ShopInfo v-for="item in nearbyList" :key="item._id" :item="item" @click="$router.push(`/shop/${item._id}`)" />
  </div>
</template>

<style scoped lang="scss">
@import '@/style/viriables.scss';

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
}
</style>