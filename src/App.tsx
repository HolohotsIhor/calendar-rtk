import React, { FC, useEffect } from 'react';
import { AppRouter } from './components/appRouter/AppRouter';
import { Navbar } from './components/navbar/Navbar';
import { Layout } from 'antd';
import './App.styl';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

export const App:FC = () => {
  const { setUser, setIsAuth } = useActions()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
        // For real cases need to check tocken from localStorage to API
        setUser({ username: localStorage.getItem('username' || '')} as IUser)
        setIsAuth(true)
    }
  }, [setUser, setIsAuth]);

  return (
    <Layout>
        <Navbar />
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
    </Layout>
  );
}

