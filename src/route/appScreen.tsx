import React from 'react';
import styled from 'styled-components';
import AppPages from './appPages';
import NavigationBar from '../components/molecules/navigationBar/navigationBar';
import View from '../components/atoms/view';
import useWindowSize from '../hooks/useWindowSize';

const RootView = styled.div<{ width: number, height: number }>`
display: flex;
flex-direction: column;
width: ${({ width }) => width}px;
height: ${({ height }) => height}px;
`;

interface IAppScreen {

}

const AppScreen: React.FC<IAppScreen> = (props) => {
    const screenSize = useWindowSize();

    return (
        <RootView
            width={screenSize.width}
            height={screenSize.height}
        >
            {/* Header */}
            {/* <NavigationBar /> */}

            {/* Pages */}
            <AppPages />

            {/* Common modal location */}
        </RootView>
    );
};

export default AppScreen;