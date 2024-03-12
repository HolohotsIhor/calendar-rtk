import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import './LoginForm.styl'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const LoginForm: FC = () => {
    return (
        <Form className='login-form'>
            <Form.Item<FieldType>
                label="Username"
                name="username"
                className='login-form__item'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className='login-form__input' />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                className='login-form__item'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className='login-form__input' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}