import React from 'react';
import View from '../../components/atoms/view';
import Button from '../../components/atoms/button';
import Layout from '../../components/atoms/layout';

const Main = () => {
    return (
        <Layout style={{ backgroundColor: 'blue', height: 10, width: 10 }}>
            <Button
                title={'버튼'}
                onClick={() => console.log('button is pressed')}
            />
        </Layout>
    );
};

export default Main;