import React from 'react';
import View from '../../components/atoms/view';
import Text from '../../components/atoms/text';
import styled from 'styled-components';

const Layout = styled(View)`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const NotFound = () => {
    return (
        <Layout>
            안녕하세요
        </Layout>
    );
};

export default NotFound;