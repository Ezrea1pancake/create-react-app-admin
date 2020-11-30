import React from 'react';
import { Pagination } from 'antd';

const ArticlePegination = ({ pageData, changePageData }) => {
    return (
        <Pagination
            showQuickJumper
            showSizeChanger
            current={pageData.pageNo}
            pageSize={pageData.pageSize}
            total={pageData.totalCount}
            onChange={(page, pageSize) => {
                changePageData({ pageNo: page, pageSize });
            }}
        />
    );
};

export default ArticlePegination;
