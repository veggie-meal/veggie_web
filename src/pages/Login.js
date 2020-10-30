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
        // <div className="site-layout-content" 
        // style={{border:"#68b0ab", borderStyle:"dashed", borderRadius:"15px", borderWidth:"2px", padding:"20px"}}>
        <div className="site-layout-content" >
          <br/><br/><br/><br/><br/>
          <center>
            <Image
              width={100}
              src="/image/vegetable.png"
            /> 
            {/* <h1>🍏VEGGIE🍏</h1>  */}
            <br/><br/>
            {/* <h1 style={{background:"#68b0ab", fontSize: "30px"
            , color: "white", borderRadius: "10px", width:"50%", marginBottom:"20px"}}>
              VEGGIE
            </h1> */}
            <h1>LOGIN</h1>
            <h3>🥗</h3>
            <br/>
            <span style={{color:"gray"}}>
              당신의 손안에 있는 <br/>
              작은 채식 도우미, <br/>
              <b style={{color:"#68b0ab"}}>V E G G I E</b>
            </span>
            <br/>
            
            <br/><br/><br/><br/><br/>

            <KaKaoBtn
              jsKey={config.KAKAO_API}
              buttonText=""
              onSuccess={result => this.kakoLoginHandler(result)}
              onFailure={this.kakoLoginHandler}
              getProfile={true}
            />

            <br/><br/><br/><br/><br/> <br/><br/>
          </center>
        </div>
      );
  }
}

const KaKaoBtn = styled(KaKaoLogin)`
  background: url("/image/kakao_login_large_narrow.png");
  width:70%;
  height:50px;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 10px;
`;


export default withRouter(Login);
