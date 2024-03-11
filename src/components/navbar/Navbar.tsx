import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './Navbar.styl'
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Navbar: FC = () => {
    const navigate = useNavigate()
    const { isAuth } = useTypedSelector( state => state.auth)

    return (
        <Layout.Header>
            <Row justify='end'>
                {
                    isAuth
                    ?
                        <>
                            <Menu
                                theme='dark'
                                mode='horizontal'
                                selectable={false}
                                className='menu'
                            >
                                <Menu.Item className='menu__item menu__item--username' key={0}>Holohots</Menu.Item>
                                <Menu.Item className='menu__item' key={1} onClick={() => console.log('need to logout')}>Logout</Menu.Item>
                            </Menu>
                        </>
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