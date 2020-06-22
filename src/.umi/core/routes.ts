// @ts-nocheck
import { ApplyPluginsType } from 'D:/fighting/study/1/react-practice/umi-xiaod/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/login",
    "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/layout').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "name": "首页",
        "exact": true
      },
      {
        "path": "/home",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/home').default,
        "exact": true
      },
      {
        "path": "/home/pageview",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/home/report/pageview').default,
        "name": "页面浏览人次",
        "exact": true
      },
      {
        "path": "/home/userview",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/home/report/userview').default,
        "name": "用户浏览人次",
        "exact": true
      },
      {
        "path": "/home/setpage",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/home/setting/setpage').default,
        "name": "页面设置",
        "exact": true
      },
      {
        "path": "/home/setlanguage",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/home/setting/setlanguage').default,
        "name": "语言设置",
        "exact": true
      },
      {
        "path": "/about",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/about/about').default,
        "wrappers": [require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/wrappers/auth').default],
        "name": "关于页",
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/goods/goods').default,
        "name": "商品页",
        "exact": true
      },
      {
        "path": "/users",
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/users/_layout').default,
        "routes": [
          {
            "path": "/users",
            "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/users/index').default,
            "exact": true
          },
          {
            "path": "/users/:name",
            "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/users/[name]').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/notfound').default,
        "name": "404页",
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
