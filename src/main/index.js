import React from 'react';
import axios from 'axios';
import {Button} from 'antd';
import './index.css';
import {useNavigate} from 'react-router-dom';
import Menubar from '../main_menu';
function MainPage() {
    const navigate = useNavigate();
    React.useEffect(function() {
        axios.get("http://localhost:8080/hi")
            .then(function(result) {
                
            })
            .catch(function(error) {
                console.error("에러발생: ", error);
            });
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
    
 <div>
             <div id="header">
                <div id="header-area">
                <div id= "header-left">HHN</div>
                <h1>Helping Hands Network</h1>
                <div id="buttons">
                <Button type="text" onClick={handleLoginClick}>로그인</Button>
                <Button type='text' onClick={handleRegisterClick}>회원가입</Button>
                </div>
                
                </div>
            </div>
            <div id="body">
                    <div id="menubar">
                        <Menubar/>
                    </div>
                <div id="recruiting_voluns">
                    <h2>
                        <h2>recruitings~~~~~</h2>
                    </h2>
                </div> 
            </div>
            <div id="footer">
                <h3>제작자들: 박상수 임재은 조은해 송주헌 강정태</h3>
            </div>
        
    </div>
    
       
    
    );
}

export default MainPage;
