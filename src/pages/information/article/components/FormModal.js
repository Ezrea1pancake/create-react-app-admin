import React, { useEffect } from 'react';
import { Modal, Button, Form, Result, Input } from 'antd';
import '../style.less';

const formLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 13,
    },
};

const FormModal = (props) => {
    const [form] = Form.useForm();
    const { done, visible, current, onDone, onCancel, onSubmit } = props;

    useEffect(() => {
        form.resetFields();
    }, [visible, form]);

    useEffect(() => {
        form.setFieldsValue({ ...current });
    }, [current, form]);

    const handleSubmit = () => {
        if (!form) return;
        form.submit();
    };

    const handleFinish = (values) => {
        if (onSubmit) onSubmit(values);
    };

    const modalFooter = done
        ? {
              footer: null,
              onCancel: onDone,
          }
        : {
              okText: '保存',
              cancelText: '放弃',
              onOk: handleSubmit,
              onCancel,
          };

    const getModalContent = () => {
        if (done) {
            return (
                <Result
                    status="success"
                    title="操作成功"
                    subTitle="已操作成功"
                    extra={
                        <Button type="primary" onClick={onDone}>
                            知道了
                        </Button>
                    }
                />
            );
        }
        return (
            <Form form={form} {...formLayout} onFinish={handleFinish}>
                <Form.Item
                    name="name"
                    label="文章标题"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名称',
                        },
                    ]}
                >
                    <Input placeholder="请输入用户名称" />
                </Form.Item>
                <Form.Item
                    name="profile"
                    label="文章摘要"
                    rules={[
                        {
                            required: true,
                            message: '请输入文章摘要',
                        },
                    ]}
                >
                    <Input placeholder="请输入文章摘要" />
                </Form.Item>
                <Form.Item
                    name="articleType"
                    label="文章类型"
                    rules={[
                        {
                            required: true,
                            message: '请输入文章类型',
                        },
                    ]}
                >
                    <Input placeholder="请输入文章类型" />
                </Form.Item>
                <Form.Item
                    name="materialType"
                    label="栏目类型"
                    rules={[
                        {
                            required: true,
                            message: '请输入栏目类型',
                        },
                    ]}
                >
                    <Input placeholder="请输入栏目类型" />
                </Form.Item>
            </Form>
        );
    };

    return (
        <Modal
            forceRender={true}
            title={done ? null : `文章${current ? '编辑' : '添加'}`}
            className="article-modal"
            destroyOnClose={false}
            visible={visible}
            {...modalFooter}
        >
            {getModalContent()}
        </Modal>
    );
};

export default FormModal;
