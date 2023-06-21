import React from 'react';
import styled from 'styled-components';
import View from '../../atoms/view';
import Text from '../../atoms/text';
import { observer } from 'mobx-react';
import globalFonts from '../../../theme/style/globalFonts';
import Menu from '../../../assets/navigationBar/menu.png';
import { scaler } from '../../../helper/scaler';
import Pressable from '../../atoms/pressable';
import navigationBarStore from '../../../stores/navigationBar/store';
import Draw from './draw';

const Layout = styled(View)`
flex-direction: row;
flex: 1;
background-color: ${({ theme }) => theme.colors.gray.base};
align-items: center;
justify-content: space-between;
padding: ${({ theme }) => theme.base.templatePadding}px;
`;

const Left = styled(View)`
`;

const Center = styled(View)`
`;

const Right = styled(View)`
`;

const Header = styled(Text)`
font-family: ${globalFonts.NanumEB};
font-size: ${({ theme }) => theme.typography.size.l1}px;
`;

const MenuImage = styled.img`
width: ${scaler(20)}px;
height: ${scaler(15)}px;
:hover {
    cursor: pointer;
}
`;

interface INavigationBar {

}

const NavigationBar: React.FC<INavigationBar> = observer((props) => {

    return (
        <Layout>
            <Left></Left>
            <Center>
                <Header>Arthur Noh</Header>
            </Center>
            <Right>
                <Pressable
                    onClick={() => {
                        navigationBarStore.setVisible(!navigationBarStore.visible);
                    }}
                >
                    <MenuImage src={Menu} />
                </Pressable>
            </Right>
            { navigationBarStore.visible && (
                <Draw
                    visible={navigationBarStore.visible}
                    onClickBlur={() => {
                        navigationBarStore.setVisible(!navigationBarStore.visible);
                    }}
                    onClickMenu={(value) => {
                        console.log(value);
                    }}
                />
            )}
            {/*
            <InnerLayout>
                <LogoImage src={Logo} />
                <DrawTitle onClick={() => setDrawType('Shopping')}>레고 제품 쇼핑</DrawTitle>
                <DrawTitle onClick={() => setDrawType('Introduce')}>레고 브랜드 소개</DrawTitle>
                <DrawTitle onClick={() => setDrawType('Support')}>고객 지원</DrawTitle>
            </InnerLayout>
            <InnerLayout>
                <MagnifierWrapper>
                    <MagnifierImage src={Magnifier}/>
                </MagnifierWrapper>
                <HeartImage src={Heart}/>
                <ShoppingBagImage src={ShoppingBag}/>
            </InnerLayout>
            { drawType !== 'None' && (
                <NavigationDrawBar
                    value={drawType}
                    onClickTitle={(value) => {
                        if (value === drawType) {
                            closeDraw();
                            return;
                        }
                        setDrawType(value);
                    }}
                    onClickBlur={closeDraw}
                    onClickClose={closeDraw}
                />
            )}
            */}
        </Layout>
    );
});

export default NavigationBar;