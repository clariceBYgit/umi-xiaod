// antd版本4.+需要单独下载
import React from 'react'//如未引入报错：Error: ReferenceError: React is not defined
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
//左侧菜单栏数据，根据点击头部一级菜单动态改变
const menuList = [
        //第一个一级菜单的二级菜单数据
        [  {
                title: '统计报表',
                keyValue: 'sub1',
                iconType: <UserOutlined />,
                children: [{
                        title: '浏览页面人次报表',
                        keyValue: '1',
                        routeurl: '/home/pageview'
                    },
                    {
                        title: '浏览用户人次报表',
                        keyValue: '2',
                        routeurl: '/home/userview'
                    },
                ]
            },
            {
                title: ' 设 置 ',
                keyValue: 'sub2',
                iconType: <LaptopOutlined />,
                children: [{
                        title: '页面设置', 
                        keyValue: '3',
                        routeurl: '/home/setpage'
                    },
                    {
                        title: '语言设置',
                        keyValue: '4',
                        routeurl: '/home/setlanguage'
                    },
                ]
            }
        ],
        //第二个一级菜单的二级菜单数据
        [
         {
            title: ' 关 于 在 线 教 育 ',
            keyValue: 'sub1',
            iconType: <NotificationOutlined />,
            children: [{
                    title: '在线教育类别',
                    keyValue: '1',
                    routeurl: '/about/educationtype'
                },
                {
                    title: ' 在 线 教 育 如 何 选 择 ',
                    keyValue: '2',
                    routeurl: '/about/seleducation'
                },
            ]
         },
        {
            title: '关于小D课堂',
            keyValue: 'sub2',
            iconType: <UserOutlined />,
            children: [{
                    title: '前端讲师',
                    keyValue: '3',
                    routeurl: '/about/frontend'
                },
                {
                    title: '后端讲师',
                    keyValue: '4',
                    routeurl: '/about/backend'
                },
            ]
        }
    ],
    //第三个一级菜单的二级菜单数据
    [{
            title: '直播课程',
            keyValue: 'sub1',
            iconType: <LaptopOutlined />,
            children: [{
                    title: 'java 零 基 础 进 阶 ',
                    keyValue: '1',
                    routeurl: '/goods/livejava'
                },
                {
                    title: '冲啊！架构师',
                    keyValue: '2',
                    routeurl: '/goods/livearchitect'
                },
            ]
        },
        {
            title: ' 录 播 课 程 ',
            keyValue: 'sub2',
            iconType: <NotificationOutlined />,
            children: [{
                    title: '前端课程',
                    keyValue: '3',
                    routeurl: '/goods/frontcourse'
                },
                {
                    title: '后端课程',
                    keyValue: '4',
                    routeurl: '/goods/backendcourse'
                },
            ]
        }
    ],
]
export default menuList