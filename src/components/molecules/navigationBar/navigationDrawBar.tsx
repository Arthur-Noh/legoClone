import React from 'react';
import styled, { keyframes } from 'styled-components';
import View from '../../atoms/view';

const ShowingAnimation = keyframes`
0% {
    width: 100px;
}
100% {
    width: 500px;
}
`;

const Layout = styled(View)<{ showDraw?: boolean }>`
position: absolute;
top: 0;
width: 20px;
z-index: 1;
${({ showDraw }) => showDraw && `animation: ${ShowingAnimation} 2s 1s infinite linear alternate`}
height: 100vh;
background-color: ${({ theme }) => theme.colors.black.base};
`;

interface INavigationDrawBar {
    showDraw?: boolean;
}

const NavigationDrawBar: React.FC<INavigationDrawBar> = (props) => {
    return (
        <Layout showDraw={props.showDraw}>

        </Layout>
    );
};

export default NavigationDrawBar;