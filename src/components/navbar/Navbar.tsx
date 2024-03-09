import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './navbar.styl'

export const Navbar: FC = () => {
    const navigate = useNavigate()
    const auth = true

    return (
        <Layout.Header>
            <Row justify='end'>
                {
                    auth
                    ?
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={false}
                            style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
                        >
                            <Menu.Item key={0} onClick={() => console.log('need to logout')}>Logout</Menu.Item>
                        </Menu>
                    :
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={false}
                            style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
                        >
                            <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>Login</Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    );
};