import { lazy } from "react";
import {RouteConfig} from 'react-router-config'
const Routes: RouteConfig = [
  {
    path:'/',
    key:'home',
    exact:true,
    component: lazy(() => import('@/pages/home'))
  },
  {
    path:'/a',
    exact:true,
    key:'a',
    component:lazy(()=> import('@/pages/a')),
    children:[
      {
        path:'/b',
        key:'b',
        exact:true,
        component:lazy(()=> import('@/pages/b')),
      }
    ]
  }
]
export default Routes