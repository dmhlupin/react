import {initState} from '../initState';


export const profileReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SWITCH_CHECKBOX':
            return {...state, ...payload}

        default:
            return state
    }
}