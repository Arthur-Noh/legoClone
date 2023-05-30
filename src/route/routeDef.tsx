import React from 'react';
import Main from '../pages/main';
import NotFound from '../pages/notFound';

// Main
const MainScreens = {
    Main: {
        path: '/main',
        element: <Main />
    },
};

// NotFound (exception page)
const NotFoundScreens = {
    NotFound: {
        path: '*',
        element: <NotFound />
    },
};

export const AppRouteDef = {
    ...MainScreens,
    ...NotFoundScreens,
};