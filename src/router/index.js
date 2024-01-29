import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/register/Register.vue'
import Shop from '@/views/shop/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop/:id',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      //beforeEnter这个函数在进入到这个路由之前会被执行
      beforeEnter(to, from, next) {
        const isLogin = localStorage.isLogin
        //如果已经登录了还想进登录页面，就直接跳转到主页
        isLogin ? next({ name: 'Home' }) : next()
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      //beforeEnter这个函数在进入到这个路由之前会被执行
      beforeEnter(to, from, next) {
        const isLogin = localStorage.isLogin
        isLogin ? next({ name: 'Home' }) : next()
      }
    },
  ]
})

//beforeEach在路由每次做切换的时候会执行
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  //to代表要跳转到的路由名称
  const name = to.name;
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  //这里的逻辑：如果是登录页或注册页就会展示
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
