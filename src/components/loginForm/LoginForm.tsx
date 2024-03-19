import React, { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import './LoginForm.styl'
import { inputRules } from '../../utils/input-rules';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { AuthActionCreators } from '../../store/reducers/auth/actionCreators';

type FieldType = {
    username?: string;
    password?: string;
};


export const LoginForm: FC = () => {
    const dispatch = useTypedDispatch()
    const { error, isLoading} = useTypedSelector( state => state.auth)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const submit = () => dispatch(AuthActionCreators.login(username, password))

    return (
        <Form
            onFinish={ submit }
            className='login-form'
        >
            { error && <div className='login-form__error'> {error} </div> }
            <Form.Item<FieldType>
                label="Username"
                name="username"
                className='login-form__item'
                rules={[inputRules.required('Please input your username!')]}
            >
                // Нужно добавить debouce для onChange
                <Input
                    className='login-form__input'
                    value={ username }
                    onChange={ e => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                className='login-form__item'
                rules={[inputRules.required('Please input your password!')]}
            >
                // Нужно добавить debouce для onChange
                <Input.Password
                    className='login-form__input'
                    value={ password }
                    onChange={ e => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}