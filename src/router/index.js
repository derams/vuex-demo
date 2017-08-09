import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Post/:id',
      name: 'Post',
      component: Post
    }
  ]
})
