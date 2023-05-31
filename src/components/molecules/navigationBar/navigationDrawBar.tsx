import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import View from '../../atoms/view';
import BackgroundBlur from '../../atoms/backgroundBlur';
import Logo from '../../../assets/common/logo.svg';
import Close from '../../../assets/common/close.svg';
import { NavigationMenu } from '../../../modules/navigationMenu';

const ShowingAnimation = keyframes`
0% {
    width: 0px;
}
100% {
    width: 500px;
}
`;

const Layout = styled(View)`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
`;

const DrawBoard = styled(View)<{ visible?: boolean }>`
${({ visible: showDraw }) => showDraw && css`animation: ${ShowingAnimation} 0.4s 0s linear alternate;`};
/* NOTE: https://velog.io/@kbm940526/MY-PORTFOLIO-WEBSITE-Err-Log-It-seems-you-are-interpolating-a-keyframe-declaration-bZfjDs-into-an-untagged-string */
width: ${({ visible: showDraw }) => showDraw ? 500 : 0}px;
height: 100vh;
z-index: 1;
padding: ${({ theme }) => theme.base.templatePadding}px;
background-color: ${({ theme }) => theme.colors.white.base};
`;

const BoardHeader = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: ${({ theme }) => theme.base.templatePadding}px;
`;

const HeaderLayout = styled(View)`
flex-direction: row;
align-items: center;
`;

const LogoImage = styled.img`
width: 30px;
height: 30px;
`;

const DrawTitle = styled(View)`
font-size: ${({ theme }) => theme.typography.size.m1}px;
white-space: nowrap;
margin-left: 40px;
:hover {
    cursor: pointer;
}
`;

const CloseImage = styled.img`
width: 20px;
height: 20px;
:hover {
    cursor: pointer;
}
`;

interface INavigationDrawBar {
    visible?: boolean;
    drawHeaderValue?: Array<NavigationMenu>; // TODO : 넣어줄 리스트 형식으로 해야함
    onClickClose?: () => void;
    onClickBlur?: () => void;
}

const NavigationDrawBar: React.FC<INavigationDrawBar> = (props) => {
    return (
        <Layout>
            { props.visible && <BackgroundBlur onClickBlur={props.onClickBlur}/> }
            <DrawBoard visible={props.visible}>
                <BoardHeader>
                    <HeaderLayout>
                        <LogoImage src={Logo} />
                        <DrawTitle >레고 제품 쇼핑</DrawTitle>
                        <DrawTitle >레고 브랜드 소개</DrawTitle>
                        <DrawTitle >고객 지원</DrawTitle>
                    </HeaderLayout>
                    <CloseImage src={Close} onClick={props.onClickClose} />
                </BoardHeader>

                11111
            </DrawBoard>
        </Layout>
    );
};

export default NavigationDrawBar;