import React from 'react';
import EmojiButton from '../components/EmojiButton';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Layout} from "antd";

const { Content } = Layout;

class Today extends React.PureComponent {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    render () {
        const { match} = this.props

        return (
            <Layout>
                <Content style={{padding:'40px 20px',minHeight:"100vh",backgroundColor:"white"}}>
                    <div className="site-layout-content">
                        <div className="site-calendar-demo-card" style={{textAlign:"center",marginTop:"20px"}}>
                            <Button style={{float:"right"}}><Link to="/">Home</Link></Button>
                        <h2>{match.params.dayId}</h2>
                        <main>
                            <EmojiButton/>
                            <EmojiButton/>
                            <EmojiButton/>
                        </main>
                        </div>
                    </div>
                </Content>
            </Layout>
        )
    }
}


export default Today;
