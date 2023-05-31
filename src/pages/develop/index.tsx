import React from 'react';
import Layout from '../../components/atoms/layout';
import useCounter from '../../hooks/useCounter';
import useNavigationMenu from '../../hooks/useNavigationMenu';

const Develop = () => {
    // const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    const { navigationMenu, onSetMenu } = useNavigationMenu();

    return (
        <Layout>
            {/*
            <div>{count}</div>
            <button onClick={onIncrease}>+ 1</button>
            <button onClick={onDecrease}>- 1</button>
            <button onClick={() => onIncreaseBy(5)}>+ 5</button>
            */}
        </Layout>
    );
};

export default Develop;