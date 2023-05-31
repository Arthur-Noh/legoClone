export type CountStateType = {
    count: number,
};

const initialState: CountStateType = {
    count: 0,
};

export type CountActionType = {
    type: 'push',
};

const countReducer = (state: CountStateType, action: CountActionType): CountStateType => {
    switch (action.type) {
        case 'push':
            return {
                ...state,
                count: state.count + 1,
            };
        default :
            return {
                ...state,
                count: initialState.count,
            };
    }
};

export default countReducer;