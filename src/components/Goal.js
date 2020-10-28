import React from 'react';
import { Progress, Card } from 'antd';

const Goal = () => {
  return (
      <div className="main-card">
          <Card>
              <Card.Grid style={{width:"60%",textAlign:"center",marginTop:"20px"}}>이번 달 목표 달성률</Card.Grid>
              <Card.Grid style={{width:"40%",textAlign:"center"}}><Progress type="circle" percent={75} width={60} /></Card.Grid>
          </Card>
      </div>
  );
}

export default Goal;
