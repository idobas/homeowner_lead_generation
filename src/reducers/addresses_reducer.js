import {ADDRESS_CHANGED} from '../actions/index';

const INITIAL_STATE = {
    address: '',
    isInMap: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADDRESS_CHANGED:
            return {...state, ...action.payload};
    }
    return state;
}