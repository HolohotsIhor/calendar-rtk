import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import './LoginForm.styl'
import { inputRules } from '../../utils/input-rules';

type FieldType = {
    username?: string;
    password?: string;
};

export const LoginForm: FC = () => {
    const submit = () => {
        console.log('submit')
    }

    return (
        <Form
            onFinish={ submit }
            className='login-form'
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                className='login-form__item'
                rules={[inputRules.required('Please input your username!')]}
            >
                <Input className='login-form__input' />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                className='login-form__item'
                rules={[inputRules.required('Please input your password!')]}
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