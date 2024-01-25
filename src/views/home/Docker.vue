<script setup>
const dockerList = [
  { icon: '&#xe875;', title: '首页' },
  { icon: '&#xe638;', title: '购物车' },
  { icon: '&#xe713;', title: '订单' },
  { icon: '&#xe612;', title: '我的' }
]
</script>

<template>
  <div class="docker">
    <div :class="{ 'docker__item': true, 'docker__item--active': index === 0 }" v-for="(item, index) in  dockerList "
      :key="item.icon">
      <!-- 这里不能使用插值语法，因为插值语法会进行转义，显示的是字符 -->
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.docker {
  display: flex;
  //使用box-sizing: border-box，防止padding和border的值影响元素的宽高
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid $content_bgColor;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    //浏览器显示的最小字体是12px，但这里需要显示10px的字体
    //所以使用scale按比例缩小
    font-size: .2rem;
    transform: scale(.5, .5);
    //默认缩放中心点是在盒子的正中心,我这里进行更改
    transform-origin: center top;
  }
}
</style>