import {
    defineConfig
} from 'umi'
export default defineConfig({
    // 路由配置
    routes: [
        {path: '/login',component: './login'},
        {
            path: '/',
            component: '../layout',
            routes:[
                {path: '/',redirect:'/home',name:'首页'}, //路径是相对于pages
                {path: '/home',component:'./home'},
                {path: '/home/pageview',component: './home/report/pageview',name:'页面浏览人次'},
                {path: '/home/userview',component: './home/report/userview',name:'用户浏览人次'},
                {path: '/home/setpage',component: './home/setting/setpage',name:'页面设置'},
                {path: '/home/setlanguage',component: './home/setting/setlanguage',name:'语言设置'},
                {
                    path: '/about',
                    component: './about/about',
                    wrappers: ['./wrappers/auth'],//路由级别的权限校验
                    name:'关于页'
                },
                {path: '/goods',component: './goods/goods',name:'商品页'},
                {
                    path: '/users',
                    component: './users/_layout',
                    routes: [{
                            path: '/users',
                            component: './users/index'
                        },
                        {
                            path: '/users/:name',
                            component: './users/[name]'
                        }, //动态路由的写法
                    ]
                },
                {
                    component: './notfound',name:'404页'
                }
            ]
        }, 
        
    ],
    // dva:{},
    // antd: {},  //配置ant-design
  
   
})