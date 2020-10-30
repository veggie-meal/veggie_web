import React from 'react';
import { Select, Button, Card, Collapse, Form } from 'antd';

const { Meta } = Card;
const { Option } = Select;

function Setting({ id, token, name }) {
  let goal = "플렉시테리언"; //localstorage
  const [form] = Form.useForm();

  function handleSubmit(e) {
    console.log(e.goal)
  }

  function handleChange(event) {
    console.log(event)
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
        <Meta title={name} />
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
              <Form.Item>
                <Button type="default" htmlType="submit">변경</Button>
              </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default Setting;
