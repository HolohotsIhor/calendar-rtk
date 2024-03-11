import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const AppRouter = () => {
    const { isAuth } = useTypedSelector( state => state.auth)

    return (
            isAuth
            ?
                <Routes>
                    {
                        privateRoutes.map( route =>
                            <Route
                                path={route.path}
                                element={<route.element/>}
                                key={route.path}
                            />
                        )
                    }
                    <Route path="*" element={<Navigate to={RouteNames.EVENT} />} />
                </Routes>
            :
                <Routes>
                    {
                        publicRoutes.map( route =>
                            <Route
                                path={route.path}
                                element={<route.element/>}
                                key={route.path}
                            />
                        )
                    }
                    <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
                </Routes>
    );
}