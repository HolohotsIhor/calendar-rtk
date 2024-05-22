import { Event } from '../pages/event/Event';
import React from 'react';
import { Login } from '../pages/login/Login';
import { Rtk } from '../pages/rtk/Rtk';
import { Favourites } from '../pages/favourites/Favourites';

export interface IRoute {
    path: string;
    element: React.ComponentType<any>;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    RTK = '/rtk',
    FAVOURITES = '/favourites',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, exact: true, element: Login },
    { path: RouteNames.RTK, exact: true, element: Rtk },
    { path: RouteNames.FAVOURITES, exact: true, element: Favourites }
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.EVENT, exact: true, element: Event }
]