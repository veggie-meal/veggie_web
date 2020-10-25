import React from 'react';
import Calendar from '../components/Calendar';
import NavBar from "../components/NavBar";
import {Layout} from "antd";

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <Layout>
        <Content style={{padding:'10px 50px',minHeight:"100vh",backgroundColor:"white"}}>
            <div className="site-layout-content">
                <Calendar/>
            </div>
        </Content>
        <NavBar/>
    </Layout>
  );
}

export default Main;
