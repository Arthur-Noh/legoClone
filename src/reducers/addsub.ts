export type AddSubStateType = {
    value: number,
};

export type AddSubActionType =  {
    type: 'increment' | 'decrement' | 'reset',
};

const initialState: AddSubStateType = {
    value: 0,
};

const addSubReducer = (state: AddSubStateType, action: AddSubActionType): AddSubStateType => {
    switch (action.type) {
        case 'increment' :
            return {
                ...state,
                value: state.value + 1,
            };
        case 'decrement' :
            return {
                ...state,
                value: state.value - 1,
            };
        case 'reset':
            return {
                ...state,
                value: initialState.value,
            };
        default :
            return {
                value: initialState.value,
            };
    }
};

export default addSubReducer;