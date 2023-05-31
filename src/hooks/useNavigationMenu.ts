import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { NavigationMenu, setMenu } from '../modules/navigationMenu';

const useNavigationMenu = () => {
    const navigationMenu = useSelector((state: RootState) => state.navigationMenu);
    const dispatch = useDispatch();

    const onSetMenu = useCallback((menu: Array<NavigationMenu>) => dispatch(setMenu(menu)), [ dispatch ]);

    return {
        navigationMenu,
        onSetMenu,
    };
};

export default useNavigationMenu;