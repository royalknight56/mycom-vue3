/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-15 10:39:18
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 14:53:44
 */
export default{
    list:[
        {
          path:'/',
          component: () => import('../layout'),
          children:[
            {
              path: '',
              redirect: '/guide',
            },
            {
              path: '/guide',
              name: 'Guide',
              component: () => import('../components/guide.vue')
            },
            {
              path: '/basic',
              name: 'Basic',
              component: () => import('../components/basic.vue')
            },
            {
              path: '/unlock',
              name: 'Unlock',
              component: () => import('../components/unlock.vue')
            },
            {
              path: '/basic',
              name: 'Basic',
              component: () => import( '../components/basic.vue')
            },
            {
              path: '/layout',
              name: 'Layout',
              component: () => import('../components/layout.vue')
            },
            {
              path: '/useful',
              name: 'Useful',
              component: () => import( '../components/useful.vue')
            },
            {
              path: '/form',
              name: 'Form',
              component: () => import('../components/form.vue')
            }
          ]
        },
        
      ]
} 