import React from 'react';
import {Col, Layout, Row} from "antd";
import NavBar from "../components/NavBar";
import BadgeItem from "../components/BadgeItem";

const { Content } = Layout;

function Badge() {
  let badgeNum = 7;
  let colCount = 3;
  let rowCount = badgeNum / colCount;
  let colCode = '';
  const rows = [];

  for (let j = 0; j < rowCount+1; j++) {
    const cols = [];
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <BadgeItem id={j*colCount+i}/>
        </Col>,
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    rows.push(
      <Row gutter={[8,32]}>{cols}</Row>
    )
  }

  return (
      <Layout>
          <Content style={{padding:'40px 20px',minHeight:"100vh",backgroundColor:"white"}}>
            {rows}
          </Content>
          <NavBar/>
      </Layout>
  );
}

export default Badge;
