import React, { useState } from 'react';
import styled from 'styled-components';
import View from '../../atoms/view';
import Logo from '../../../assets/common/logo.svg';
import Magnifier from '../../../assets/common/magnifier.svg';
import Heart from '../../../assets/common/heart.svg';
import ShoppingBag from '../../../assets/common/shoppingBag.svg';
import NavigationDrawBar from './navigationDrawBar';
import globalFonts from '../../../theme/style/globalFonts';

const Layout = styled(View)`
flex-direction: row;
flex: 1;
background-color: ${({ theme }) => theme.colors.gray.base};
align-items: center;
justify-content: space-between;
padding: ${({ theme }) => theme.base.templatePadding}px;
`;

const Text = styled(View)`
font-size: ${({ theme }) => theme.typography.size.m1}px;
font-family: ${globalFonts.NanumR};
`;

const LogoImage = styled.img`
width: 30px;
height: 30px;
`;

const InnerLayout = styled(View)`
flex-direction: row;
align-items: center;
`;

const DrawTitle = styled(View)`
font-size: ${({ theme }) => theme.typography.size.m1}px;
margin-left: 40px;
:hover {
    cursor: pointer;
}
/* Disable drag option */
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;

const MagnifierWrapper = styled(View)`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
background-color: ${({ theme }) => theme.colors.white.base};
border-radius: 200px;
`;

const MagnifierImage = styled.img`
width: 20px;
height: 20px;
:hover {
    cursor: pointer;
}
`;

const HeartImage = styled.img`
margin-left: 20px;
width: 20px;
height: 20px;
:hover {
    cursor: pointer;
}
`;

const ShoppingBagImage = styled.img`
margin-left: 10px;
width: 20px;
height: 20px;
:hover {
    cursor: pointer;
}
`;

export type NavigatorType = 'Shopping' | 'Introduce' | 'Support' | 'None';

interface INavigationBar {

}

const NavigationBar: React.FC<INavigationBar> = (props) => {
    const [ drawType, setDrawType ] = useState<NavigatorType>('None');

    const closeDraw = () => {
        setDrawType('None');
    };

    return (
        <Layout>
            <Text>
                이얍이얍
            </Text>
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
};

export default NavigationBar;