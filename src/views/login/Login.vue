<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import httpInstance from '@/utils/request'
import Toast from '@/components/Toast.vue'

const router = useRouter()

const username = ref('')
const password = ref('')
const showToast = ref(false)
const toastMessage = ref('')

//输入内容不能为空
const toastEffect = (tips) => {
  showToast.value = true
  toastMessage.value = tips
  setTimeout(() => {
    showToast.value = false
    toastMessage.value = ''
  }, 1000);
}


//登录方法
const handleLogin = async () => {
  if (username.value === '' || password.value === '') {
    toastEffect('用户名或密码不能为空')
    return
  }
  const res = await httpInstance.post('/api/user/login', { username: username.value, password: password.value })
  if (res.data.errno === 0) {
    localStorage.isLogin = true
    router.push({ name: 'Home' })
  } else {
    toastEffect('登录失败')
  }

}
</script>

<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" v-model="password" />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="$router.push('/register')">立即注册</div>
    <Toast v-if="showToast" :message="toastMessage" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;

  }

  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 6px;

    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: $bgColor;
    font-size: .16rem;
    text-align: center;
  }

  &__login-link {
    text-align: center;
    font-style: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>