import React from 'react';
import { Col, Row } from 'antd';
import BadgeItem from '../components/BadgeItem';

function Badge() {
  let badgeNum = 7;
  let colCount = 3;
  let rowCount = badgeNum / colCount;
  const rows = [];

  for (let j = 0; j < rowCount+1; j++) {
    const cols = [];
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <BadgeItem id={j*colCount+i}/>
        </Col>,
      );
    }
    rows.push(
      <Row gutter={[8,32]}>{cols}</Row>
    )
  }

  return (
    <div className="site-layout-content">
      {rows}
    </div>
  );
}

export default Badge;
