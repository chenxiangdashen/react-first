import asyncComponent from './asyncComponent'

const _import_views = file => asyncComponent(() => import(`views/${file}`));


export const constantRouterMap = [
    {
        path: '/login',
        login: false,
        hidden: true,
        name: '账号登陆',
        component: _import_views('login')
    },
    {
        path: '/error/404',
        component: _import_views('Error/NotFound'), name: '404'
    },
    {
        path: '/',
        exact: true,
        icon: 'user',
        name: '首页',
        component: _import_views('Home')
    }
]
export const allRoutes = constantRouterMap

// export const asyncRouterMap 

