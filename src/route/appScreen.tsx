import React from 'react';
import styled from 'styled-components';
import AppPages from './appPages';
import NavigationBar from '../components/molecules/navigationBar/navigationBar';
import View from '../components/atoms/view';

const RootView = styled.div`
flex-direction: column;
`;

interface IAppScreen {

}

const AppScreen: React.FC<IAppScreen> = (props) => {
    return (
        <RootView>
            {/* Header */}
            <NavigationBar />

            {/* Pages */}
            <AppPages />

            {/* Common modal location */}
        </RootView>
    );
};

export default AppScreen;