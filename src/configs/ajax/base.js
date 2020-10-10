import axios from 'axios';
import qs from 'qs';
// import { browserHistory } from 'react-router';
import { message } from 'antd';

// const { CancelToken } = axios;

const token = localStorage.getItem('token');

const baseConfig = {
    timeout: 10000,
    validateStatus(status) {
        return status >= 200 && status < 300;
    },
};

const instance = axios.create(baseConfig);

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
    (config) => {
        process.env.NODE_ENV === 'development' &&
            (config.url = `/api${config.url}&ignoreCsrfToken=true`);
        token && (config.headers.Authorization = token);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        if (!(response.data && response.data.ret)) {
            return Promise.reject(response);
        }
        if (response.data.ret === 200) {
            return Promise.resolve(response);
        } else {
            message.warning(response.data.msg || '用户登录信息已过期');
            if (response.data.ret === 102000) {
                // browserHistory.push('/login');
            }
            return Promise.reject(response);
        }
    },
    (error) => Promise.reject(error),
);

export default instance;

export const GET = (url, data) => {
    url = `${url}?_v=${Date.now()}`;

    return instance
        .get(url, {
            params: data,
        })
        .then((res) => res.data)
        .catch((error) => console.log('ajaxError', error));
};

export const POST = (url, data, config) => {
    url = `${url}?_v=${Date.now()}`;

    let postData = data;
    if (!config) {
        postData = qs.stringify(data);
    }

    return instance
        .post(url, postData, config)
        .then((res) => res.data)
        .catch((error) => console.log('ajaxError', error));
};
