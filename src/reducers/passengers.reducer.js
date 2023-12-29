import { passengers } from '../actions/constants'

const initState = {
    loading: false,
    passengers: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case passengers.GET_PASSENGERS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case passengers.GET_PASSENGERS_SUCCESS:
            state = {
                ...state,
                passengers: action.payload.passengers,
                loading: false
            };
            break;

        case passengers.GET_PASSENGERS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
