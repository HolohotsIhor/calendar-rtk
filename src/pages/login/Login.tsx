import React, { FC } from 'react';
import { Layout, Row } from 'antd';
import { LoginForm } from '../../components/loginForm/LoginForm';

export const Login: FC = () => {
    return (
        <Layout>
            <Row className='container h-full'>
                <LoginForm />
            </Row>
        </Layout>
    );
}