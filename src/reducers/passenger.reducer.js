import { passengers } from '../actions/constants'

const initState = {
    loading: false,
    passenger: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case passengers.GET_SINGLE_PASSENGERS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case passengers.GET_SINGLE_PASSENGERS_SUCCESS:
            state = {
                ...state,
                passenger: action.payload.passenger,
                loading: false
            };
            break;

        case passengers.GET_SINGLE_PASSENGERS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
