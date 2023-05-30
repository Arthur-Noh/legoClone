import React from 'react';
import { ComponentSize } from '../../helper/componentHelper';
import styled from 'styled-components';
import View from './view';

const Layout = styled(View)<{ size?: ComponentSize, disabled?: boolean }>`
align-items: center;
justify-content: center;
padding: ${({ theme, size }) =>
    size === 'large' ? theme.base.largeComponentPadding :
    size === 'medium' ? theme.base.mediumComponentPadding :
    theme.base.smallComponentPadding
}px;
background-color: ${({ theme, disabled }) => 
    !disabled ? theme.colors.orange.base : theme.colors.gray.base
};
&:hover {

}
`;

const Title = styled(View)<{ size?: ComponentSize, disabled?: boolean }>`

`;

interface IButton {
    title: string;
    size?: ComponentSize;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButton> = (props) => {
    return (
        <Layout
            size={props.size}
            disabled={props.disabled}
            onClick={props.disabled ? undefined: props.onClick}
        >
            <Title
                size={props.size}
                disabled={props.disabled}
            >
                {props.title}
            </Title>
        </Layout>
    );
};

export default Button;