import React, { Component} from 'react'
// import Login from 'ant-design-pro/lib/Login';
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './login.css'
import logo from '../../public/logo.jpg'
import { connect } from 'umi'
@connect()
export default class extends Component {
 handleSubmit = ( values )=> {
    console.log('Received values of form: ', values);
    this.props.dispatch({type:"user/login",payload:values})
  };

  render() {
    return (
      <div>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.handleSubmit}
        className={style.qx}
      >
        <img className={style.logo} src={logo} alt='logo图' />
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="用户密码"
          />
        </Form.Item>
     

        <Form.Item>
          <Button className={style.btn} type="primary" htmlType="submit">
            登录
          </Button>
         
        </Form.Item>
      </Form>

       
      </div>
    );
  }
}



