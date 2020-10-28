import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar";

const { Content } = Layout;

function Setting() {
  return (
      <Layout>
          <Content style={{padding:'40px 20px',minHeight:"100vh",backgroundColor:"white"}}>
              <div className="site-layout-content">
                  Setting
              </div>
          </Content>
          <NavBar/>
      </Layout>
  );
}

export default Setting;
