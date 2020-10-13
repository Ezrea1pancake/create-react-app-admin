import React from 'react';

import { loginRequest } from '../../api/user';
import { withRouter } from 'react-router-dom';

import { browserHistory } from 'router/history';

class Article extends React.Component {
    componentDidMount() {
        loginRequest({
            loginname: '13000000000',
            pwd: 'a111111',
            verifyCode: '',
        })
            .then(() => {
                console.log(this.props);
                // this.props.history.push('/login');
                console.log(browserHistory);
                browserHistory.push('login');
            })
            .catch(() => {
                console.log(this.$props);
            });
    }
    render() {
        return <div>Article</div>;
    }
}

export default withRouter(Article);
