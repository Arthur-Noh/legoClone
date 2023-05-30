import React, { useState } from 'react';
import styled from 'styled-components';
import View from '../../atoms/view';
import Logo from '../../../assets/common/logo.svg';
import Magnifier from '../../../assets/common/magnifier.svg';
import Heart from '../../../assets/common/heart.svg';
import ShoppingBag from '../../../assets/common/shoppingBag.svg';
import NavigationDrawBar from './navigationDrawBar';

const Layout = styled(View)`
flex-direction: row;
flex: 1;
background-color: ${({ theme }) => theme.colors.yellow.base};
align-items: center;
justify-content: space-between;
padding: ${({ theme }) => theme.base.templatePadding}px;
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

interface INavigationBar {

}

const NavigationBar: React.FC<INavigationBar> = (props) => {

    const [ showDraw, setShowDraw ] = useState<boolean>(false);

    return (
        <>
        <Layout>
            <InnerLayout>
                <LogoImage src={Logo} />
                <DrawTitle onClick={() => {setShowDraw(prev => !prev)}}>레고 제품 쇼핑</DrawTitle>
                <DrawTitle>레고 브랜드 소개</DrawTitle>
                <DrawTitle>고객 지원</DrawTitle>
            </InnerLayout>
            <InnerLayout>
                <MagnifierWrapper>
                    <MagnifierImage src={Magnifier}/>
                </MagnifierWrapper>
                <HeartImage src={Heart}/>
                <ShoppingBagImage src={ShoppingBag}/>
            </InnerLayout>
        </Layout>
        <NavigationDrawBar showDraw={showDraw}/>
        </>
    );
};

export default NavigationBar;