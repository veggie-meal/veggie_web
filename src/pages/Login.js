import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

import * as config from '../config';

const kakao = window;

function Login() {


    const kakoLoginHandler = (result) => {
        console.log(result);

        let token = result.response.access_token;
        let id = result.profile.id;
        call_login(token, id);
    }

    return (
        <div>
            <center>
                <br/><br/>
                <h1>로그인</h1>
                <br/><br/><br/>
                <KaKaoBtn
                    jsKey={config.KAKAO_API}
                    buttonText=""
                    onSuccess={result => kakoLoginHandler(result)}
                    onFailure={kakoLoginHandler}
                    getProfile={true}
                />
            </center>
        </div>
        
    );
  }

const KaKaoBtn = styled(KaKaoLogin)`
    background: url("/image/kakao_login_large_wide.png");
    width:90%;
    height:50px;
    background-repeat: no-repeat;
    background-size: cover;
    border: none
`;

const call_login = async (token, id) => {
    const url = config.API_ADDR + "user/login";
    let data = {
        userAT : token
        , userID : id
    }
  
    const response = await axios.post(url, data); 
    console.log(response.data);

    if(response.data.result && response.data.code !== "-1"){}
        document.location.href = "/main";
};

export default Login;