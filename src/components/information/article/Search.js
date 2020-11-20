import React from 'react';
import { Form, Col, Row, Input, Select, Button, Space } from 'antd';

const { Option } = Select;

const SearchForm = ({ changeSearchData, initialValues }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        changeSearchData(values);
    };

    return (
        <Form
            form={form}
            initialValues={initialValues}
            name="article_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row gutter={24}>
                <Col span={8} key="name">
                    <Form.Item name="name" label="文章名称">
                        <Input placeholder="请输入文章名称" />
                    </Form.Item>
                </Col>
                <Col span={8} key="articleType">
                    <Form.Item name="articleType" label="文章类型">
                        <Select placeholder="请选择文章类型">
                            <Option value="">全部</Option>
                            <Option value={0}>总部</Option>
                            <Option value={1}>营业部</Option>
                            <Option value={3}>财经内参</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8} key="materialType">
                    <Form.Item name="materialType" label="栏目类型">
                        <Select placeholder="请选择栏目类型">
                            <Option value="">全部</Option>
                            <Option value="internalReference">财经内参</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={8} key="upStatus">
                    <Form.Item name="upStatus" label="上架状态">
                        <Select placeholder="请选择上架状态">
                            <Option value="">全部</Option>
                            <Option value="1">已上架</Option>
                            <Option value="0">已下架</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8} key="isRecommended">
                    <Form.Item name="isRecommended" label="推荐状态">
                        <Select placeholder="请选择推荐状态">
                            <Option value="">全部</Option>
                            <Option value="1">已推荐</Option>
                            <Option value="0">未推荐</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="search-btn">
                    <Space>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button type="primary">添加</Button>
                    </Space>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;
