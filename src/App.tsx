import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import AppScreen from './route/appScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AddSubActionType, AddSubStateType } from './reducers/addsub';
import { CountActionType, CountStateType } from './reducers/countReducer';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppScreen />
        </ThemeProvider>
    );
};

export default App;