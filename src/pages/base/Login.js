import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestLogin, logined, changeUserInfo } from 'store/actions';
import './Login.less';

import { Form, Input, Button } from 'antd';

import { getShopAuthImage, loginRequest, requestPublicKey } from 'api/user';
import JSEncrypt from 'jsencrypt';

const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};

const validateMessages = {
    // eslint-disable-next-line
    required: '请填写${label}!',
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        loading: state.login.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestLogin: () => dispatch(requestLogin()),
        logined: () => dispatch(logined()),
        changeUserInfo: (name) => dispatch(changeUserInfo(name)),
    };
};

const Login = ({ location, history, isLogin, loading, requestLogin, logined, changeUserInfo }) => {
    const [verifyCodeUrl, setVerifyCodeUrl] = useState(getShopAuthImage());
    const [loginForm] = Form.useForm();

    function getPublicKey() {
        return new Promise((resolve, reject) => {
            requestPublicKey().then((keyInfo) => {
                if (keyInfo.ret !== 0) {
                    this.$message.info(keyInfo.msg);
                    reject(keyInfo.msg);
                    return;
                }
                resolve(keyInfo.result);
            });
        });
    }

    const redirect = (location.state && location.state.redirect) || '/';
    if (isLogin) {
        return <Redirect to={redirect} />;
    }

    function loginSubmit(values) {
        getPublicKey().then((publicKey) => {
            const encryptor = new JSEncrypt();
            //设置公钥
            encryptor.setPublicKey(publicKey);
            const pwdStr = encryptor.encrypt(values.pwd);
            loginRequest({
                ...values,
                pwd: pwdStr,
            }).then((loginInfo) => {
                console.log(loginInfo);
                if (loginInfo.ret !== 0) {
                    return;
                }
                requestLogin();
                setTimeout(() => {
                    logined();
                    changeUserInfo(loginInfo.nickname);
                    history.push('/article');
                }, 1500);
            });
        });
    }

    return (
        <div className="login-container">
            <div className="main">
                <div className="form-title">分发小店后台管理系统</div>
                <div className="login-form">
                    <Form
                        {...layout}
                        form={loginForm}
                        name="nest-messages"
                        onFinish={loginSubmit}
                        validateMessages={validateMessages}
                    >
                        <Form.Item name="loginname" label="用户名" rules={[{ required: true }]}>
                            <Input addonBefore="用户名" />
                        </Form.Item>
                        <Form.Item name="pwd" label="密码" rules={[{ required: true }]}>
                            <Input.Password addonBefore="密码" />
                        </Form.Item>
                        <Form.Item name="verifyCode" label="验证码" rules={[{ required: true }]}>
                            <div className="code-input">
                                <Input maxLength={4} />
                                <img
                                    src={verifyCodeUrl}
                                    alt="验证码"
                                    onClick={() => setVerifyCodeUrl(getShopAuthImage())}
                                />
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="btn-box">
                                <Button type="primary" htmlType="submit" disabled={loading}>
                                    登录
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
