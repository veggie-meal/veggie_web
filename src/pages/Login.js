import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { Image } from 'antd';
import { withRouter } from 'react-router-dom';

import * as config from '../config';

class Login extends React.Component {
  kakoLoginHandler = (result) => {
    const token = result.response.access_token;
    const id = result.profile.id;
    const name = result.profile.properties.nickname;
    this.loginCheck(token, id, name);
  }

  loginCheck = async (token, id, name) => {
    const url = config.API_ADDR + 'user/login';
    const data = {
      userAT: token,
      userId: id,
    };

    const response = await axios.post(url, data);
    if (response.data.result && response.data.code === 1) {
      this.props.authenticateUser(id, token, name, response.data.code);
    } else if (response.data.result && response.data.code === 2) {
      this.props.authenticateUser(id, token, name, response.data.code);
    } else {
      alert('에러가 발생했습니다.');
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
