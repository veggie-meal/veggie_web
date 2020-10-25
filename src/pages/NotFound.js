import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar";

const { Content } = Layout;

function NotFound() {
    return (
        <Layout>
            <Content style={{padding:'40px 20px',minHeight:"100vh",backgroundColor:"white"}}>
                <div className="site-layout-content">
                    NotFound
                </div>
            </Content>
            <NavBar/>
        </Layout>
    );
}

export default NotFound;

