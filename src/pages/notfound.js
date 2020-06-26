// import React from 'react';
// import styles from './notfound.css'; 
// import {Exception} from 'ant-design-pro';
import Exception from 'ant-design-pro/lib/Exception';
import 'ant-design-pro/dist/ant-design-pro.css';
export default () => {
  return (
    <div>
      <Exception type='404' backText='返回首页' redirect='/'></Exception>
    </div>
  );
}
