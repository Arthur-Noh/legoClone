// Ducks pattern

// Action types
const SET_MENU = 'navigationMenu/SET_MENU' as const;
// const SET_MENU_DETAIL = 'navigationMenu/SET_MENU_DETAIL' as const;

// Action function
export const setMenu = (menu: Array<NavigationMenu>) => ({
    type: SET_MENU,
    payload: menu,
});

// Action object types
type NavigationMenuAction =
    | ReturnType<typeof setMenu>;

// State type & initial value
type NavigationMenuDetail = {
    title: string,
    path?: string,
    isHeader?: boolean,
};

export type NavigationMenu = {
    title: string,
    path?: string,
    details?: Array<NavigationMenuDetail>,
};

const initialState: Array<NavigationMenu> = [
    {
        title: '메뉴 1',
        path: '/NotFound',
        details: [
            { title: '상세 1', path: '/NotFound', isHeader: true },
            { title: '상세 2', path: '/NotFound'},
            { title: '상세 3', path: '/NotFound'},
        ],
    },
    { title: '메뉴 2', path: '/NotFound', details: [] },
    { title: '메뉴 3', path: '/NotFound', details: [] },
];

// Reducer
const navigationMenu = (state: Array<NavigationMenu> = initialState, action: NavigationMenuAction) => {
    switch (action.type) {
        case SET_MENU:
            return state;
        default :
            return state;
    }
};

export default navigationMenu;