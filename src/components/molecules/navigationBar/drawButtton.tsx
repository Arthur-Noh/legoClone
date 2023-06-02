import React from 'react';
import Arrow from '../../../assets/common/arrow.svg';
import styled from 'styled-components';
import View from '../../atoms/view';

const Layout = styled(View)`
flex-direction: row;
justify-content: space-between;
:hover {
    cursor: pointer;
}
`;

const Title = styled(View)`
font-size: ${({ theme }) => theme.typography.size.m1}px;
`;

const ArrowImage= styled.img`
width: 20px;
height: 20px;
`;

interface IDrawButton {
    title: string;
    showArrow?: boolean;
    onClick: () => void;
}

const DrawButton: React.FC<IDrawButton> = (props) => {
    return (
        <Layout onClick={props.onClick}>
            <Title>{props.title}</Title>
            {props.showArrow && (
                <ArrowImage src={Arrow} />
            )}
        </Layout>
    );
};

export default DrawButton;