<script setup>
const iconsList = [
  { imgName: '超市', desc: '超市便利' },
  { imgName: '菜市场', desc: '菜市场' },
  { imgName: '水果店', desc: '水果店' },
  { imgName: '鲜花', desc: '鲜花绿植' },
  { imgName: '医药健康', desc: '医药健康' },
  { imgName: '家居', desc: '家居时尚' },
  { imgName: '蛋糕', desc: '烘焙蛋糕' },
  { imgName: '签到', desc: '签到' },
  { imgName: '大牌免运', desc: '大牌免运' },
  { imgName: '红包', desc: '红包套餐' },
]
</script>

<template>
  <!-- 头部地址栏 -->
  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海
    <span class="iconfont position__notice">&#xe60d;</span>
  </div>
  <!-- 搜索框 -->
  <input type="text" class="input iconfont" placeholder="&#xe600; 沃尔玛超市八折购物" value="" />
  <!-- 广告横幅 -->
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>
  <!-- 选项列表 -->
  <div class="icons">
    <div class="icons__item" v-for="(icon, index)  in iconsList" :key="index">
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${icon.imgName}.png`">
      <p class="icons__item__desc">{{ icon.desc }}</p>
    </div>
  </div>
  <!-- 分割框 -->
  <div class="gap"></div>
</template>

<style scoped lang="scss">
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;

  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}

.input {
  width: 100%;
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  //去掉边框
  border: none;
  //去掉点击时的边框
  outline: none;
  padding-left: .16rem;
}

.banner {
  //这三行代码用来防抖
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;

  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  //元素在必要的时候换行
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item {
    width: 20%;

    &__img {
      //将元素转换为块级元素
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }

    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0 -0.18rem;
  height: .1rem;
  background: $content_bgColor;
}
</style>