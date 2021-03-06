import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import styles from './index.css'
import logo from '../../public/logo.jpg'
import { Link, connect } from 'umi'
import menuList from '../../mock/menu'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// 注入用户状态和退出登录的方法
@connect(
    state=>({
        userinfo:state.user
    }),
    {
        logout:()=>({type:"user/logout"}) //派发的action是命名空间+reducer
    }
)
export default class index extends Component {
    state = {
        siderMenu:[],
        collapsed: false,
    }
    // 给二级菜单初始化菜单数据
    componentDidMount(){
        this.setState({
            siderMenu: menuList[0]
        })
    }
    // 点击一级菜单切换二级菜单数据的方法
    levelOne = (index) => {
        this.setState({
            siderMenu:menuList[index]
        })
    }
    // 二级菜单的伸缩效果
    onCollapse = (collapsed )=>{
        // console.log(collapsed);
        this.setState({ collapsed })
    }
   
    render() {
        // 定义下拉菜单内容
        const menu = (
            <Menu>
              <Menu.Item>个人中心</Menu.Item>
              <Menu.Item onClick={()=>this.props.logout()}>退出登录</Menu.Item>
              
            </Menu>
          );
        // console.log(this.props)
        const routeName='/'+this.props.location.pathname.split('/')[1]
        const selectedKeys = [routeName]
        // console.log(selectedKeys)
        return (
            <>
                <Layout>
                    <Header className="header">
                        <img src={logo} className={styles.logo} />
                        <Menu theme="dark" mode="horizontal" 
                        //defaultSelectedKeys={['2']} //默认选中
                        selectedKeys={selectedKeys}
                        >
                            <Menu.Item key="/home">
                                <Link onClick={()=>this.levelOne(0)} to='/'>首页</Link>
                                </Menu.Item>
                            <Menu.Item key="/about">
                                <Link onClick={()=>this.levelOne(1)} to='/about'>关于</Link>
                                </Menu.Item>
                            <Menu.Item key="/goods">
                                <Link onClick={()=>this.levelOne(2)} to='/goods'>商品</Link>
                                </Menu.Item>
                        </Menu>
                        <div className={styles.user}>
                            <Avatar size='large' src={this.props.userinfo.userimg} />
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {this.props.userinfo.username}
                                </a>
                            </Dropdown>
                        </div>
                    </Header>
                    <Layout className={styles.content}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200} className="site-layout-background">
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                                {/* 渲染二级菜单数据 */}
                           {
                               this.state.siderMenu.map(val=>{
                                   return(
                                    <SubMenu key={val.keyValue}  title={val.title} icon={val.iconType}>
                                        {val.children? val.children.map(vals=>(
                                             <Menu.Item key={vals.keyValue}>
                                                 <Link to={vals.routeurl}> {vals.title}</Link>
                                             </Menu.Item>
                                        )):null}
                                    </SubMenu>
                                   )
                                })

                           }
                          
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb> */}
                            <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                            >
                            {
                                this.props.children
                            }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>,
            </>
        )
    }
}


