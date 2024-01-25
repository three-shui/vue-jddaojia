<script setup>
const nearbyList = [
  { id: 1, title: '沃尔玛', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1W+', '起送￥0', '周末满99减5'], desc: 'VIP尊享满99减10元' },
  { id: 2, title: '山姆会员商店', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1W+', '起送￥59', '优惠多多'], desc: '买买买~~~' },
  { id: 3, title: 'STARBUCKS', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1W+', '起送￥0', '买一送一'], desc: 'A Coffee Store' },
  { id: 4, title: 'Luckin coffee', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1W+', '起送￥19', '周周￥9.9'], desc: 'luckin hand' }
]
</script>

<template>
  <!-- 附近店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag" v-for="(innerItem, index) in item.tags" :key="index">{{ innerItem }}</span>
        </div>
        <p class="nearby__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }

  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content_bgColor;

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>