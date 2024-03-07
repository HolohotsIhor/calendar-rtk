import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { Login } from '../pages/Login';

export const AppRouter = () => {
    const auth = true;

    return (
            auth === true
            ?
                <Routes>
                    {
                        privateRoutes.map( route =>
                            <Route
                                path={route.path}
                                element={<route.element/>}
                            />
                        )
                    }
                </Routes>
            :
                <Routes>
                    {
                        publicRoutes.map( route =>
                            <Route
                                path={route.path}
                                element={<route.element/>}
                            />
                        )
                    }
                </Routes>
    );
}