// Ducks pattern
// @see https://github.com/erikras/ducks-modular-redux

// Action types - Non Typescript type
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// Action functions
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// FSA rule
// @see https://github.com/redux-utilities/flux-standard-action
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

// Action object types - Typescript type
type CounterAction =
    ReturnType<typeof increase> |
    ReturnType<typeof decrease> |
    ReturnType<typeof increaseBy>;

// State type & initial value
type CounterState = {
    count: number,
};

const initialState: CounterState = {
    count: 0,
};

// Reducer
const counter = (state: CounterState = initialState, action: CounterAction ) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREASE:
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREASE_BY:
            return {
                ...state,
                count: state.count + action.payload,
            };
        default:
            return state;
    }
};

export default counter;