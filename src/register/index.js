import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [itr, setItr] = useState('');

  const onChangeName = (e_n) => setName(e_n.target.value);
  const onChangeEmail = (e_e) => setEmail(e_e.target.value);
  const onChangePassword = (e_p) => setPassword(e_p.target.value);
  const onChangeAge = (value) => setAge(value);
  const onChangeIntroduction = (e_i) => setItr(e_i.target.value);

  const onFinish = () => {
    axios.post("http://localhost:8080/register", {
      ID: name,
      PW: password,
      EMAIL: email,
      AGE: age,
      INTRODUCTION: itr,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log("POST 요청 성공:", response.data);
        if (response.data === 'success') {
            window.location.href = '/login';} // 리다이렉션 수행
        // 여기서 응답을 처리하거나 다른 작업을 수행할 수 있습니다.
      })
      .catch(error => {
        console.error("POST 요청 에러:", error);
        // 여기서 에러 처리를 하거나 다른 작업을 수행할 수 있습니다.
      });

    setName('');
    setPassword('');
    setEmail('');
    setAge('');
    setItr('');
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={name}
          onChange={onChangeName}
        />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input
          value={email}
          onChange={onChangeEmail}
        />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber
          value={age}
          onChange={onChangeAge}
        />
      </Form.Item>
      <Form.Item name={['user', 'password']} label="Password">
        <Input
          value={password}
          onChange={onChangePassword}
        />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea
          value={itr}
          onChange={onChangeIntroduction}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;

// import React, { useState } from 'react';
// import { Button, Form, Input, InputNumber } from 'antd';
// import axios from 'axios';


// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
// /* eslint-enable no-template-curly-in-string */


// const RegisterPage = () => {

//     const onFinish = () => {
//         axios.post("http://localhost:8080/register", 
//         { //키 이름이 백엔드와 같아야 백에서 데이터 받아짐.
//         ID: name,
//         PW: password,
//         EMAIL: email,
//         AGE: age,
//         INTRODUCTION: itr,
    
//       },{
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       })
//         .then(response => {
//           console.log("POST 요청 성공:", response.data);
//           // 여기서 응답을 처리하거나 다른 작업을 수행할 수 있습니다.
//         })
//         .catch(error => {
//           console.error("POST 요청 에러:", error);
//           // 여기서 에러 처리를 하거나 다른 작업을 수행할 수 있습니다.
//         });
    
//       setname('');
//       setP('');
//       setEmail('');
//       setAge('');
//       setItr('');
      
//         //console.log(values);
//     };

//     const [name,setname] = useState("");
//     const [email,setEmail] = useState("");
//     const [age,setAge] = useState(0);
//     const [password,setP] = useState("");
//     const [itr,setItr] = useState("");

//     const onChange_N = (e_n) => setname(e_n.target.value);
//     const onChange_E = (e_e) => setEmail(e_e.target.value);
//     const onChange_P = (e_p) => setP(e_p.target.value);
//     const onChange_A = (e_a) => setAge(e_a);
//     const onChange_I = (e_i) => setItr(e_i.target.value);

//   <Form
//     {...layout}
//     name="nest-messages"
//     onFinish={onFinish}
//     style={{
//       maxWidth: 600,
//     }}
//     validateMessages={validateMessages}
//   >
//     <Form.Item
//       name={['user', 'name']}
//       label="Name"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input 
//       value={name}
//       onChange={onChange_N}/>
//     </Form.Item>
//     <Form.Item
//       name={['user', 'email']}
//       label="Email"
//       rules={[
//         {
//           type: 'email',
//         },
//       ]}
//     >
//       <Input 
//             value={email}
//             onChange={onChange_E}/>
//     </Form.Item>
//     <Form.Item
//       name={['user', 'age']}
//       label="Age"
//       rules={[
//         {
//           type: 'number',
//           min: 0,
//           max: 99,
//         },
//       ]}
//     >
//       <InputNumber 
//             value={age}
//             onChange={onChange_A}/>
//     </Form.Item>

//     <Form.Item name={['user', 'password']} label="password">
//       <Input 
//             value={password}
//             onChange={onChange_P}/>
//     </Form.Item>

//     <Form.Item name={['user', 'introduction']} label="Introduction">
//       <Input.TextArea 
//             value={itr}
//             onChange={onChange_I}/>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         ...layout.wrapperCol,
//         offset: 8,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>

//   </Form>
// };

// export default RegisterPage;