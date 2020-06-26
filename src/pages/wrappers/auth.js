// 此文件的作用 配置路由守卫----权限设置（没有登录去login，已登录去about）

// 页面跳转的两种方式
// 1.命令式 history.push  通常在事件处理中被调用
// 2. 声明式 通常作为 React 组件使用   <Link to="/list">Go to list page</Link>
// import { Link } from 'umi';
import { history, connect } from 'umi'
import React,{ Component } from 'react'
@connect(
    state =>({token:state.user.token})
)
export default class extends Component{
    render(){
        console.log(this.props.token)
       if(this.props.token){
           return(
            <div>
                {this.props.children}
            </div>
           )
       }
       history.push('/login') 
       return null
    }
}
