import React from 'react';
import axios from 'axios';
import { withRouter} from "react-router-dom";
import { Select, Button } from 'antd';

import * as config from '../config';

const { Option } = Select;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vegan_type: 'FLEXITARIAN' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const id = this.props.id;
    const password = this.props.token;
    const name = this.props.name;
    const vegan_type = this.state.vegan_type;
    const url = config.API_ADDR + 'user/user';
    const data = {
      userId: id,
      pass_word: password,
      user_name: name,
      vegan_type: vegan_type,
    };

    const response = await axios.post(url, data);
    if (response.data.result) this.props.signUp();
  }

  handleChange = (event) => {
    this.setState({ vegan_type: event.target.value });
  }

  render() {
    const name = this.props.name;
    return(
      <div className="site-layout-content">
        <br/><br/><br/><br/><br/>
        <center>
          <h1>🥗WELCOME🥗</h1>
          <h3>안녕하세요, {name}님!</h3>
          <span>VEGGIE에 오신 것을 환영합니다. <br/></span>

          <br/><br/>

          <span style={{color:"gray"}}>
            VEGGIE, 통칭 배찌에서는,<br/>
            각자의 목표를 설정해 목표 달성률에 따라<br/>
            귀여운 배찌를 얻으실 수 있습니다. <br/>
             <br/>
            
            이곳에 {name}님의 목표를 선택해 주세요.
          </span>

          <br/>

          <br/>
          <form onSubmit={this.handleSubmit}>
            <Select defaultValue="FLEXITARIAN" style={{ width: 300 }} onChange={this.handleChange}>
              <Option value="FLEXITARIAN">플렉시테리언</Option>
              <Option value="POLLO">폴로 베지테리언</Option>
              <Option value="PESCO">페스코 베지테리언</Option>
              <Option value="LACTO-OVO">락토 오보 베지테리언</Option>
              <Option value="OVO">오보 베지테리언</Option>
              <Option value="LACTO">락토 베지테리언</Option>
              <Option value="VEGAN">비건</Option>
            </Select>
            <br/>
            <br/>
            <Button type="primary" htmlType="submit">제출하기</Button>
          </form>
        </center>
      </div>
    )
  }
}

export default withRouter(SignUp);
