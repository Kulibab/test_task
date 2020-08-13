const ADD_GRADIENT = 'ADD_GRADIENT';
const REMOVE_GRADIENT = 'REMOVE_GRADIENT';

let initialState = {
    gradientsList: []
}

const gradientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GRADIENT:
            let newGradient = {
                firstGrad: action.firstGrad,
                secondGrad: action.secondGrad,
                id: state.gradientsList[0] ? state.gradientsList[state.gradientsList.length - 1].id + 1 : 1
            }
            return {
                ...state,
                gradientsList: [...state.gradientsList, newGradient]
            }
        case REMOVE_GRADIENT:
            debugger;
            return {
                ...state,
                gradientsList: state.gradientsList.filter(el => el.id !== action.id)
            }
        default:
            return state;
    }
}

export const addGradient = ({firstGrad, secondGrad}) => ({
    type: ADD_GRADIENT,
    firstGrad,
    secondGrad
});

export const removeGradient = (id) => {
debugger
    return {
    type: REMOVE_GRADIENT,
    id
}};

export default gradientsReducer;