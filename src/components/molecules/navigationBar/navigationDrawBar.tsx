import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import View from '../../atoms/view';
import BackgroundBlur from '../../atoms/backgroundBlur';
import Logo from '../../../assets/common/logo.svg';
import Close from '../../../assets/common/close.svg';
import { NavigationMenu } from '../../../modules/navigationMenu';
import { NavigatorType } from './navigationBar';
import DrawButton from './drawButtton';

const ShowingAnimation = (showDetail?: boolean) => keyframes`
0% {
    width: ${showDetail ? 500 : 0}px;
}
100% {
    width: ${showDetail ? 700 : 500}px;
}
`;

const Layout = styled(View)`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
`;

const DrawBoard = styled(View)<{ visible?: boolean, showDetail?: boolean }>`
/* NOTE: https://velog.io/@kbm940526/MY-PORTFOLIO-WEBSITE-Err-Log-It-seems-you-are-interpolating-a-keyframe-declaration-bZfjDs-into-an-untagged-string */
animation: ${props => ShowingAnimation(props.showDetail)} 0.2s 0s linear alternate;
width: ${({ showDetail }) => showDetail ? 700: 500 }px;
height: 100vh;
z-index: 1;
padding: ${({ theme }) => theme.base.templatePadding}px;
background-color: ${({ theme }) => theme.colors.white.base};
`;

const BoardLayout = styled(View)`
flex: 1;
flex-direction: row;
`;

const BoardLeft = styled(View)`
`;

const BoardRight = styled(View)`
flex: 1;
`;

const DraWTitleWrapper = styled(View)`
flex-direction: row;
align-items: center;
`;

const BoardHeader = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: ${({ theme }) => theme.base.templatePadding}px;
`;

const BoardBody = styled(View)`
flex: 1;
flex-direction: row;
// background-color: gray;
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
/* Disable drag option */
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;

const CloseView = styled(View)`
`;

const CloseImage = styled.img`
width: 30px;
height: 30px;
:hover {
    cursor: pointer;
}
`;

const ButtonLayout = styled(View)`
width: 300px;
padding: ${({ theme }) => theme.base.templatePadding}px 0;
margin-left: 40px;
`;

const DetailLayout = styled(View)`
width: 200px;
height: ${window.innerHeight}px;
padding: ${({ theme }) => theme.base.templatePadding}px 0;
margin-left: 20px;
overflow-y: scroll;
`;

const DrawButtonWrapper = styled(View)`
margin-bottom: 15px;
`;


interface INavigationDrawBar {
    value: NavigatorType;
    drawHeaderValue?: Array<NavigationMenu>; // TODO : 넣어줄 리스트 형식으로 해야함
    onClickTitle: (value: NavigatorType) => void;
    onClickClose?: () => void;
    onClickBlur?: () => void;
}

const NavigationDrawBar: React.FC<INavigationDrawBar> = (props) => {
    const [ drawTitle, setDrawTitle ] = useState<string>();
    const [ showDetail, setShowDetail ] = useState<boolean>(false);
    
    // NOTE : Draw 인자 갯수 증가로 스크롤 금지
    useEffect(() => {
        document.body.style.cssText = `
            position: fixed;
            top : -${window.scrollY}px;
            overflow-y: hidden;
            width: 100%;
        `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    } , []);

    return (
        <Layout>
            <BackgroundBlur onClickBlur={props.onClickBlur}/>
            <DrawBoard showDetail={showDetail}>
                <BoardLayout>
                    <BoardLeft>
                        <LogoImage src={Logo} />
                    </BoardLeft>
                    <BoardRight>
                        <BoardHeader>
                            <DraWTitleWrapper>
                                <DrawTitle onClick={() => props.onClickTitle('Shopping')}>레고 제품 쇼핑</DrawTitle>
                                <DrawTitle onClick={() => props.onClickTitle('Introduce')}>레고 브랜드 소개</DrawTitle>
                                <DrawTitle onClick={() => props.onClickTitle('Support')}>고객 지원</DrawTitle>
                            </DraWTitleWrapper>
                            <CloseView>
                                <CloseImage src={Close} onClick={props.onClickClose}/>
                            </CloseView>
                        </BoardHeader>
                        <BoardBody>
                            <ButtonLayout>
                                { props.value === 'Shopping' ? (
                                    <>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='시리즈별 세트'
                                            showArrow
                                            onClick={() => {
                                                setShowDetail(true);
                                            }}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='연령별'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='가격별'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고상품'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='관심분야'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='독점제품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='신제품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='베스트셀러'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='홈데코'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='할인 및 행사'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='출시 예정'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='마지막 재고'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='브릭 악세사리 & 키트'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    </>
                                ) : props.value === 'Introduce' ? (
                                    <>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='기업 가치'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고 앱'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고 매거진'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고 전 제품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고 전체 관심사별'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='성인 환영'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='VIP 리워드 프로그램'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고® MOSAIC MAKER'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고® 선물 아이디어'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    </>
                                ) : props.value === 'Support' ? (
                                    <>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='주문 현황 확인'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='배송 및 반품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='스토어 검색'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='조립설명서 검색'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='일반적인 질문'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='문의하기'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='부속품 브릭'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    </>
                                ):(
                                    <></>
                                )}
                            </ButtonLayout>
                            { showDetail && (
                                <DetailLayout>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='연령별'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='가격별'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='레고상품'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='관심분야'
                                            showArrow
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='독점제품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='신제품'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='베스트셀러'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='홈데코'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='할인 및 행사'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='출시 예정'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='마지막 재고'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                    <DrawButtonWrapper>
                                        <DrawButton
                                            title='브릭 악세사리 & 키트'
                                            onClick={() => console.log('제목 눌림')}
                                        />
                                    </DrawButtonWrapper>
                                </DetailLayout>
                            )}
                        </BoardBody>
                    </BoardRight>
                </BoardLayout>
            </DrawBoard>
        </Layout>
    );
};

export default NavigationDrawBar;