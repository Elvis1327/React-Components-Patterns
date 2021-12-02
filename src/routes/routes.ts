import { lazy, LazyExoticComponent } from 'react';
import LazyPage1 from '../01-lazyload/pages/LazyPage1';

type JSXComponent = () => JSX.Element;

type Route = {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1')); 
const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3')); 


export const routes: Route[] = [
    {
        to: '/lazy1',
        path:'/lazy1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path:'/lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path:'/lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    },
];