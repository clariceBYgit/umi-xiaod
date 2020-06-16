import React from 'react';
import styles from './[name].css';
import { Button } from 'antd'

export default (props) => {
  console.log(props)
  return (
    <div>
      <h1 className={styles.title}>Page users/[name]动态路由 我是路由跳转详情页</h1>
      <div>
        欢迎来到<b>{props.match.params.name}</b>的详情
      </div>
      <Button type='primary' onClick={()=>{props.history.goBack()}}>返回</Button>
    </div>
  );
}
