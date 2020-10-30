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
        <center>
          <h3>안녕하세요, {name}님!</h3>
          <h3>이곳에 {name}님의 목표를 선택해 주세요.</h3>
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
