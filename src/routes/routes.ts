import { lazy, LazyExoticComponent } from 'react';

import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

type Route = {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}


const lazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        to: '/lazyload',
        path:'/lazyload/*',
        Component: lazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];
