import React, {FC} from 'react';
import './App.css';
import { AppRouter } from './components/app-router/AppRouter';
import { Navbar } from './components/navbar/Navbar';
import { Layout } from 'antd';

export const App:FC = () => {
  return (
    <Layout>
        <Navbar />
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
    </Layout>
  );
}

