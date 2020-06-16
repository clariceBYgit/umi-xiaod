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
    "path": "/goods",
    "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/goods').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/index').default,
    "exact": true
  },
  {
    "path": "/about",
    "component": require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/about').default,
    "wrappers": [require('D:/fighting/study/1/react-practice/umi-xiaod/src/pages/wrappers/auth').default],
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
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
