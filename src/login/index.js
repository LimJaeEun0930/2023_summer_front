import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.css';
import axios from 'axios';
const LogInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish =() => {
    // const data = {
    //     ID: username,
    //     PW: password
    //   };
    
      axios.post("http://localhost:8080/login", { //키 이름이 백엔드와 같아야 백에서 데이터 받아짐.
        ID: username,
        PW: password
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          if (result.status === 200) {
            window.open('/', '_self')
          }
          console.log("POST 요청 성공:", response.data);
          // 여기서 응답을 처리하거나 다른 작업을 수행할 수 있습니다.
        })
        .catch(error => {
          console.error("POST 요청 에러:", error);
          // 여기서 에러 처리를 하거나 다른 작업을 수행할 수 있습니다.
        });
    
      setUsername('');
      setPassword('');
  };
  const onChange_id = (e_i) => setUsername(e_i.target.value);
  const onChange_pw = (e_p) => setPassword(e_p.target.value);

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={username}
            onChange={onChange_id}
          />
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
            value={password}
            type="password"
            placeholder="Password"
            onChange={onChange_pw}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
      <h1>{username}</h1>
    </div>
  );
};

export default LogInPage;
