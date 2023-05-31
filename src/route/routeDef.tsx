import React from 'react';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import Develop from '../pages/develop';

// Develop - Note page
const DevelopScreens = {
    Develop: {
        path: '/develop',
        element: <Develop />
    },
};

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
    ...DevelopScreens,
    ...MainScreens,
    ...NotFoundScreens,
};