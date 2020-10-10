import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import '@/less/Home.less';
import SideBar from '@/components/base/SideBar';

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="home-container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        {this.state.collapsed ? 'admin' : 'create-react-app-admin'}
                    </div>
                    <SideBar />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background site-layout-top">
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: this.toggle,
                            },
                        )}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
