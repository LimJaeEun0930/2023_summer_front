import React, { useState } from 'react';
import { Menu } from 'antd';
import {useNavigate} from 'react-router-dom';



const Menubar = () => {
    
    const navigate = useNavigate();

    const handleIntroClick = () => {
        navigate('/introduction');
    };
    const handleRecruitingClick = () => {
        navigate('/recruiting');
    };
    const handleCsCenterClick = () => {
        navigate('/CsCenter');
    };
    const handleMyVClick = () => {
        navigate('/MyV');
    };
    const items = [
     
      {
        label: (
            <a onClick={handleIntroClick}>소개</a>
    
          
        ),
        key: 'alipay',
      },
      {
        label: (
          <a onClick={handleRecruitingClick}>
            모집중인 봉사
          </a>
        ),
        key: 'alipay',
      },
      {
        label: (
            <a onClick={handleCsCenterClick}>
            고객센터
          </a>
        ),
        key: 'alipay',
      },
      {
        label: (
            <a onClick={handleMyVClick}>
            나의 자원봉사
          </a>
        ),
        key: 'alipay',
      },
    ];
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  
};

export default Menubar;

// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// const items = [
//   {
//     label: 'Navigation One',
//     key: 'mail',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Navigation Two',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           {
//             label: 'Option 1',
//             key: 'setting:1',
//           },
//           {
//             label: 'Option 2',
//             key: 'setting:2',
//           },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           {
//             label: 'Option 3',
//             key: 'setting:3',
//           },
//           {
//             label: 'Option 4',
//             key: 'setting:4',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//     key: 'alipay',
//   },
// ];
// const Menubar = () => {
//   const [current, setCurrent] = useState('mail');
//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };
//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };
// export default Menubar;