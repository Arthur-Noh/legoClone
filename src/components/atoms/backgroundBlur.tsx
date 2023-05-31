import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${({ theme }) => `${theme.colors.black.base}30`};
`;

interface IBackgroundBlur {
    onClickBlur?: () => void;
}

const BackgroundBlur: React.FC<IBackgroundBlur> = (props) => {
    return (
        <Background onClick={props.onClickBlur} />
    );
};

export default BackgroundBlur;