import React from 'react';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const SIDE_BAR_LIST = [
    {
        title: '资讯管理',
        icon: <UserOutlined />,
        key: 'users',
        children: [
            {
                title: '文章管理',
                icon: <VideoCameraOutlined />,
                key: 'article',
            },
            {
                title: '快讯管理',
                icon: <UploadOutlined />,
                key: 'quick-info',
            },
        ],
    },
    {
        title: '惠分享管理',
        icon: <UserOutlined />,
        key: 'users',
    },
];

export default SIDE_BAR_LIST;

export const DEFAULT_ROUTE = 'article';
