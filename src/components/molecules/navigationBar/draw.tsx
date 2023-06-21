import React from 'react';
import styled, { keyframes } from 'styled-components';
import View from '../../atoms/view';
import { observer } from 'mobx-react';
import BackgroundBlur from '../../atoms/backgroundBlur';
import { scaler } from '../../../helper/scaler';
import Text from '../../atoms/text';
import globalFonts from '../../../theme/style/globalFonts';
import Pressable from '../../atoms/pressable';

const Layout = styled(View)`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
align-items: flex-end;
`;

const BoardAnimation = (visible: boolean) => keyframes`
0% {
    width: 0px;
};
100% {
    width: ${scaler(200)}px;
};
`;

const Board = styled(View)<{ visible: boolean }>`
animation: ${props => BoardAnimation(props.visible)} 0.2s 0s linear alternate;
width: ${scaler(200)}px;
height: 100vh;
z-index: 1;
right: 0;
background-color: ${({ theme }) => theme.colors.white.base};
padding: ${({ theme }) => theme.base.templatePadding}px;
`;

const BoardTitle = styled(Text)`
font-family: ${globalFonts.NanumB};
font-size: ${({ theme }) => theme.typography.size.l1}px;
margin-bottom: ${({ theme }) => theme.base.templatePadding}px;
`;

const BoardTitleDivider = styled(View)`
border-top-width: 2px;
border-top-color: ${({ theme }) => theme.colors.gray.base};
border-top-style: solid;
margin-bottom: ${scaler(24)}px;
`;

const MenuButton = styled(Pressable)`
margin-bottom: ${scaler(24)}px;
//margin-bottom: ${({ theme }) => theme.base.templatePadding}px;
`;

const MenuTitle = styled(Text)`
font-size: ${({ theme }) => theme.typography.size.l1}px;
`;

interface IDraw {
    visible: boolean;
    onClickBlur?: () => void;
    onClickMenu: (value: MenuType) => void;
}

type MenuType = 'Main' | 'About' | 'Project' | 'Contact';

const Draw: React.FC<IDraw> = observer((props) => {
    return (
        <Layout>
            <BackgroundBlur onClickBlur={props.onClickBlur} />
            <Board visible={props.visible}>
                <BoardTitle>Menu</BoardTitle>
                <BoardTitleDivider />
                <MenuButton onClick={() => props.onClickMenu('Main')}>
                    <MenuTitle>Main</MenuTitle>
                </MenuButton>
                <MenuButton onClick={() => props.onClickMenu('About')}>
                    <MenuTitle>About</MenuTitle>
                </MenuButton>
                <MenuButton onClick={() => props.onClickMenu('Project')}>
                    <MenuTitle>Project</MenuTitle>
                </MenuButton>
                <MenuButton onClick={() => props.onClickMenu('Contact')}>
                    <MenuTitle>Contact</MenuTitle>
                </MenuButton>
            </Board>
        </Layout>
    );
});

export default Draw;