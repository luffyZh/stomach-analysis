import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Step2 from '@/components/step2'
import Step3 from '@/components/step3'
import Step4 from '@/components/step4'
import Step5 from '@/components/step5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/step2',
      name: 'step2',
      component:Step2
    },
    {
      path: '/step3',
      name: 'step3',
      component:Step3
    },
    {
      path: '/step4',
      name: 'step4',
      component:Step4
    },
    {
      path: '/step5',
      name: 'step5',
      component:Step5
    }
  ]
})
