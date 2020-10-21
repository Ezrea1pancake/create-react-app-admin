import React from 'react';

import { loginRequest } from '../../api/user';
import { withRouter } from 'react-router-dom';

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
