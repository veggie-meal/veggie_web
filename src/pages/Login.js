import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { Image } from 'antd';
import { withRouter} from "react-router-dom";

import * as config from '../config';

function sendLogin({ authenticateUser }) {
  // function kakoLoginHandler(result) {
  //   const token = result.response.access_token;
  //   const id = result.profile.id;
  //   login(token, id);
  // }

  // async function login(token, id) {
    
  // }
}


class Login extends React.Component {
  kakoLoginHandler = (result) => {
    const token = result.response.access_token;
    const id = result.profile.id;
    const name = result.profile.properties.nickname;
    this.loginCheck(token, id, name);
  }

  loginCheck = async(token, id, name) => {
    const url = config.API_ADDR + 'user/login';
    const data = {
      userAT: token,
      userId: id,
    };

    const response = await axios.post(url, data);
    console.log(data, response.data)
    if(response.data.result && response.data.code === 1){
      //authenticateUser();
      this.props.history.push("/");
    }
 
    else if(response.data.result && response.data.code === 2){
      console.log("add User");
      this.props.history.push({
        pathname:"/signUp"
        , state: { token: token, id: id, name: name }
      });
    }

    if(response.data.result && response.data.code !== '-1'){
      authenticateUser(response.data.code); // 임시
    }
    else {
      alert("에러가 발생했습니다.");
    }
  }

  render() {
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
            onSuccess={result => this.kakoLoginHandler(result)}
            onFailure={this.kakoLoginHandler}
            getProfile={true}
          />
        </div>
      );
  }
}



const KaKaoBtn = styled(KaKaoLogin)`
  background: url("/image/kakao_login_large_wide.png");
  width:90%;
  height:50px;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export default withRouter(Login);
