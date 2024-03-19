import React, { FC } from 'react';
import { Card, Layout, Row } from 'antd';
import { LoginForm } from '../../components/loginForm/LoginForm';

export const Login: FC = () => {
    return (
        <Layout>
            <Row className='container h-full'>
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
}