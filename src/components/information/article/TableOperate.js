import React from 'react';
import { Space } from 'antd';

const TableOperate = () => {
    return (
        <Space className="theme-color">
            <span>推荐</span>
            <span>修改</span>
            <span>删除</span>
            <span>下架</span>
        </Space>
    );
};

export default TableOperate;
