import React from 'react';
import { Table, Space } from 'antd';

import { formatDate } from 'utils/common';
import { getArticleTypeStr, getMaterialTypeStr } from 'utils/information';
import { TABLE_SCROLL_WIDTH } from 'configs/constant/common';

const articleTable = ({ loading, tableData, showEditModal }) => {
    const recommend = (id) => {
        console.log(id);
    };
    const edit = (row) => {
        showEditModal(row);
    };

    const TableOperate = ({ row }) => {
        return (
            <Space className="theme-color">
                <span onClick={() => recommend(row.id)}>推荐</span>
                <span onClick={() => edit(row)}>修改</span>
                <span>删除</span>
                <span>下架</span>
            </Space>
        );
    };

    const columns = [
        {
            title: '文章名称',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '创建时间',
            dataIndex: 'gmtCreate',
            key: 'gmtCreate',
            width: 200,
            align: 'center',
            render: (gmtCreate) => {
                return gmtCreate ? formatDate(gmtCreate) : '';
            },
        },
        {
            title: '文章类型',
            dataIndex: 'articleType',
            key: 'articleType',
            width: 100,
            align: 'center',
            render: (articleType) => {
                return articleType ? getArticleTypeStr(articleType) : '';
            },
        },
        {
            title: '栏目类型',
            dataIndex: 'materialType',
            key: 'materialType',
            width: 100,
            align: 'center',
            render: (materialType) => {
                return materialType ? getMaterialTypeStr(materialType) : '';
            },
        },
        {
            title: '上架状态',
            dataIndex: 'upStatus',
            key: 'upStatus',
            width: 100,
            align: 'center',
            render: (upStatus) => {
                return upStatus === 1 ? '已上架' : '已下架';
            },
        },
        {
            title: '推荐状态',
            dataIndex: 'isRecommended',
            key: 'isRecommended',
            width: 100,
            align: 'center',
            render: (isRecommended) => {
                return isRecommended === 1 ? '已推荐' : '未推荐';
            },
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 200,
            align: 'center',
            render: (record) => <TableOperate row={record} />,
        },
    ];

    return (
        <Table
            bordered
            loading={loading}
            columns={columns}
            dataSource={tableData}
            pagination={false}
            scroll={{ x: TABLE_SCROLL_WIDTH }}
        />
    );
};

export default articleTable;
