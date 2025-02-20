import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './Navbar.styl'
import { useTypedSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';

export const Navbar: FC = () => {
    const navigate = useNavigate()
    const { isAuth, user } = useTypedSelector(state => state.auth)
    const { logout } = useActions()

    const menuPrivatItems = [
        { key: 0, label: user.username },
        { key: 1, label: 'Logout', onClick: () => logout() }
    ];

    const menuPublicItems = [
        { key: 0, label: 'Favourites', onClick: () => navigate(RouteNames.FAVOURITES) },
        { key: 1, label: 'RTK', onClick: () => navigate(RouteNames.RTK) },
        { key: 2, label: 'Login', onClick: () => navigate(RouteNames.LOGIN) }
    ];

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
                                selectable={ false }
                                className='menu'
                                items={ menuPrivatItems }
                            >
                            </Menu>
                        </>
                    :
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={ false }
                            className='menu'
                            items={ menuPublicItems }
                        >
                        </Menu>
                }

            </Row>
        </Layout.Header>
    );
};