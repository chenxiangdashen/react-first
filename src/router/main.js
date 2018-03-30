import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // Progress 进度条样式
import {allRoutes} from './config'

const getRoute = (routes, pathname) => {
    let fn = routes => routes.map(route => {
        if (route.path === pathname && !route.redirect) return route
        if (route.children) return fn(route.children).find(v => v)
        return false
    })
    return fn(routes).find(route => route)
}


/*404判断*/
const isExistPath = (routes, pathname) => routes.some(route => {
    if (route.path === pathname) return true
    if (route.children) return isExistPath(route.children, pathname)
    return false
})



// 路由渲染
const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} />
// 路由表渲染
const renderRouteComponent = routes => routes.map((route, index) => {
    return route.children ? route.children.map(route => RouteComponent(route)) : RouteComponent(route)
})


class MainComponents extends React.Component {
    componentWillMount () {
        NProgress.start()
        this.dataInit(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.dataInit(nextProps)
    }
    componentDidUpdate () {
        NProgress.start()
    }
    //数据初始化
    dataInit (props) {
        console.log(props)

    }



    // 401
    render () {
        let {location: {pathname}} = this.props

        // 404
        if (!isExistPath(allRoutes, pathname)) return <Redirect to='/error/404'/>

        //当前路径路由信息
        let currRoute = getRoute(allRoutes, pathname)

        // 网页title
        document.title = currRoute.name

        return (
            <Switch>
                {renderRouteComponent(allRoutes)}
            </Switch>
        )
    }
}

export default MainComponents
