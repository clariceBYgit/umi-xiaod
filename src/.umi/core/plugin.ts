// @ts-nocheck
import { Plugin } from 'D:/fighting/study/1/react-practice/umi-xiaod/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva',],
});
plugin.register({
  apply: require('D:/fighting/study/1/react-practice/umi-xiaod/src/.umi/plugin-dva/runtime.tsx'),
  path: 'D:/fighting/study/1/react-practice/umi-xiaod/src/.umi/plugin-dva/runtime.tsx',
});

export { plugin };
