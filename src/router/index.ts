import { Event } from '../pages/event/Event';
import React from 'react';
import { Login } from '../pages/login/Login';
import { Rtk } from '../pages/rtk/Rtk';

export interface IRoute {
    path: string;
    element: React.ComponentType<any>;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    RTK = '/rtk',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, exact: true, element: Login },
    { path: RouteNames.RTK, exact: true, element: Rtk }
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.EVENT, exact: true, element: Event }
]