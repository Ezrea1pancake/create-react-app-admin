import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Logout.less';
import { logout, changeUserInfo } from 'store/actions';

const mapStateToProps = (state) => {
    return {
        username: state.userInfo.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        changeUserInfo: (name) => dispatch(changeUserInfo(name)),
    };
};

class Logout extends React.Component {
    logoutHandler = () => {
        this.props.logout();
        this.props.changeUserInfo();
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Divider />
                <Menu.Item key="1" onClick={this.logoutHandler}>
                    退出登录
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <div>
                    <span className="username">{this.props.username}</span>
                    <DownOutlined />
                </div>
            </Dropdown>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
