import React from 'react';
import MainCalendar from '../components/MainCalendar';
import NavBar from "../components/NavBar";
import {Layout} from "antd";

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <Layout>
        <Content style={{padding:'10px 20px',minHeight:"100vh",backgroundColor:"white"}}>
            <div className="site-layout-content">
                <MainCalendar/>
            </div>
        </Content>
        <NavBar/>
    </Layout>
  );
}

export default Main;
