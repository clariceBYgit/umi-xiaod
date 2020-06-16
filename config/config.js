import {
    defineConfig
} from 'umi'
export default defineConfig({
    // 路由配置
    routes: [{
            path: '/login',
            component: './login'
        },{
            path: '/goods',
            component: './goods'
        },
        {
            path: '/',
            component: './index'
        }, //路径是相对于pages
        {
            path: '/about',
            component: './about',
            wrappers: ['./wrappers/auth'] //路由级别的权限校验
        },
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
            component: './notfound'
        }
    ],
    // dva:{},
    antd: {},  //配置ant-design
})