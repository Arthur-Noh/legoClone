import React from 'react';
import styled from 'styled-components';
import AppPages from './appPages';

const RootView = styled.div`
display: flex;
`;

interface IAppScreen {

}

const AppScreen: React.FC<IAppScreen> = (props) => {
    return (
        <RootView>
            {/* Pages */}
            <AppPages />

            {/* Common modal location */}
        </RootView>
    );
};

export default AppScreen;