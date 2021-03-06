import React from 'react';
import { Progress, Card } from 'antd';

function Goal({ percentage }) {
  const newPercentage = percentage.toFixed(2);
  return (
    <div className="main-card">
      <Card>
        <Card.Grid style={{width:"60%",textAlign:"center",marginTop:"20px"}}>이번 달 목표 달성률</Card.Grid>
        <Card.Grid style={{width:"40%",textAlign:"center"}}>
          <Progress type="circle" percent={newPercentage} width={60} strokeColor="#68b0ab" />
        </Card.Grid>
      </Card>
    </div>
  );
}

export default Goal;
