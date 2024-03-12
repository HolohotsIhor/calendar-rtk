import React, {FC} from 'react';
import { AppRouter } from './components/appRouter/AppRouter';
import { Navbar } from './components/navbar/Navbar';
import { Layout } from 'antd';
import './App.styl';

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

