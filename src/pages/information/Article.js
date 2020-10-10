import React from 'react';

import { loginRequest } from '../../api/user';

class Article extends React.Component {
    componentDidMount() {
        loginRequest({
            loginname: '13000000000',
            pwd: 'a111111',
            verifyCode: '',
        });
    }
    render() {
        return <div>Article</div>;
    }
}

export default Article;
