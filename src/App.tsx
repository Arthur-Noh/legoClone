import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import AppScreen from './route/appScreen';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppScreen />
        </ThemeProvider>
    );
};

export default App;