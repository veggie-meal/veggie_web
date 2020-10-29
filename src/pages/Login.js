import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { Image } from 'antd';

import * as config from '../config';

function Login({ authenticateUser }) {
  function kakoLoginHandler(result) {
    const token = result.response.access_token;
    const id = result.profile.id;
    login(token, id);
  }

  async function login(token, id) {
    const url = config.API_ADDR + 'user/login';
    const data = {
      userAT: token,
      userID: id,
    };

    const response = await axios.post(url, data);

    if(response.data.result && response.data.code !== '-1'){
      authenticateUser();
    }
  }

  return (
    <div className="site-layout-content">
      <h1>로그인</h1>
      <Image
        width={200}
        src="/image/veggie.png"
      />
      <KaKaoBtn
        jsKey={config.KAKAO_API}
        buttonText=""
        onSuccess={result => kakoLoginHandler(result)}
        onFailure={kakoLoginHandler}
        getProfile={true}
      />
    </div>
  );
}

const KaKaoBtn = styled(KaKaoLogin)`
  background: url("/image/kakao_login_large_wide.png");
  width:90%;
  height:50px;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export default Login;
