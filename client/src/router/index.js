import Vue from 'vue'
import Router from 'vue-router'

import Error from '../components/pages/Error'
import Success from '../components/pages/Success'
import Checkout from '../components/pages/Checkout'

Vue.use(Router)

const router = new Router({
  routes : [
    { path: '/', redirect: '/checkout' },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      meta: {
        title: 'Pagar comisión',
      },
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        title: 'Error al pagar',
      },
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
      meta: {
        title: '¡Todo listo!',
      },
    },
    {
      path: '/success-oxxo',
      name: 'SuccessOxxo',
      component: Success,
      props: {
        message: 'La publicación se verá apenas el pago de Oxxo se refleje en nuestro sistema'
      },
      meta: {
        title: '¡Todo listo!',
      },
    },
  ],
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  next()
  document.title = to.meta.title
})

export default router
