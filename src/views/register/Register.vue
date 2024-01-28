<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import httpInstance from '@/utils/request'
import Toast from '@/components/Toast.vue'

const router = useRouter()

const username = ref('')
const password = ref('')
const checkPassword = ref('')
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

//注册方法
const handleRegister = async () => {
  if (username.value === '' || password.value === '' || checkPassword.value === '') {
    toastEffect('用户名或密码不能为空')
    return
  }
  const res = await httpInstance.post('/api/user/register', { username: username.value, password: password.value })
  if (res.data.errno === 0) {
    router.push({ name: 'Login' })
  } else {
    toastEffect('注册失败')
    // showToast.value = true
    // toastMessage.value = '注册失败'
    // setTimeout(() => {
    //   showToast.value = false
    //   toastMessage.value = ''
    // }, 2000);
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
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入确认密码" type="password" v-model="checkPassword" />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="$router.push('/login')">已有账号去登录</div>
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

  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #FFF;
    font-size: .16rem;
    text-align: center;
  }

  &__register-link {
    text-align: center;
    font-style: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>