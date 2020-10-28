import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

import * as config from '../config';

function Login() {
  function kakoLoginHandler(result) {
    const token = result.response.access_token;
    const id = result.profile.id;
    call_login(token, id);
  }

  return (
    <div>
      <h1>로그인</h1>
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

const call_login = async (token, id) => {
  const url = config.API_ADDR + "user/login";
  const data = {
    userAT : token,
    userID : id
  };

  const response = await axios.post(url, data);

  if(response.data.result && response.data.code !== "-1"){
    document.location.href = "/main";
  }
};

export default Login;
