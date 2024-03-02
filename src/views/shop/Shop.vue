<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ShopInfo from '@/components/ShopInfo.vue';
import httpInstance from '@/utils/request';
import Content from './Content.vue'
import Cart from './Cart.vue';

const route = useRoute()

const item = ref({})

const getItemData = async () => {
  const res = await httpInstance.get(`/api/shop/${route.params.id}`)
  item.value = res.data.data
}

getItemData()
</script>

<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="$router.back()">&#xe662;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe600;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <!-- 这里加v-show是为了防止图片还没加载出来的时候显示一个方框 -->
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
  </div>
  <Content />
  <Cart/>
</template>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.wrapper {
  padding: 0 .18rem;
}

.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;

  &__back {
    width: .3rem;
    font-size: .3rem;
    color: #B6B6B6;
  }

  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;

    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>