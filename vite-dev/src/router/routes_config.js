/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-15 10:39:18
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-18 09:51:53
 */
export default{
    list:[
        {
          path:'/',
          component: () => import('../layout/index.vue'),
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
              component: () => import('../components/basicNew.vue')
            },
            {
              path: '/unlock',
              name: 'Unlock',
              component: () => import('../components/alertNew.vue')
            },
            {
              path: '/layout',
              name: 'Layout',
              component: () => import('../components/layoutNew.vue')
            },
            {
              path: '/useful',
              name: 'Useful',
              component: () => import( '../components/useful.vue')
            },
            {
              path: '/form',
              name: 'Form',
              component: () => import('../components/formNew.vue')
            }
          ]
        },
        
      ]
} 