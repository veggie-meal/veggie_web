import React from 'react';
import { Select, Button, Card, Collapse, Form } from 'antd';
import axios from 'axios';

import * as config from '../config';

const { Meta } = Card;
const { Option } = Select;

function Setting({ id, token, name, goal }) {
  const [form] = Form.useForm();

  async function handleSubmit(e) {
    const vegan_type = goal;
    const url = config.API_ADDR + 'user/goal';
    const data = {
      userId: id,
      vegan_type: vegan_type,
    };

    const response = await axios.post(url, data);
    if (response.data.result) alert("수정되었습니다.");
  }

  function handleChange(event) {
    goal = event;
  }

  return (
    <div className="site-layout-content">
      <Card
        cover={
          <img
            alt="setting"
            src="/image/setting.jpg"
          />
        }
      >
        <center>
          <span style={{color:"gray"}}>
            당신의 손안에 있는 <br/>
            작은 채식 도우미, <br/>
            <b style={{color:"#68b0ab"}}>V E G G I E</b>
          </span>
        </center>
        <br/><br/>

        <b>이름</b><Meta title={name} />
        <br/>
        <b>목표</b>
        <div className="goal-select">
          <Form layout="inline" form={form} onFinish={handleSubmit}>
            <Form.Item name="goal" className="select-bar">
              <Select defaultValue={goal} onChange={handleChange} >
                <Option value="FLEXITARIAN">플렉시테리언</Option>
                <Option value="POLLO">폴로 베지테리언</Option>
                <Option value="PESCO">페스코 베지테리언</Option>
                <Option value="LACTO-OVO">락토 오보 베지테리언</Option>
                <Option value="OVO">오보 베지테리언</Option>
                <Option value="LACTO">락토 베지테리언</Option>
                <Option value="VEGAN">비건</Option>
              </Select>
            </Form.Item>
            <br/><br/>
              <Form.Item>
                <Button type="primary" htmlType="submit">변경</Button>
              </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default Setting;
