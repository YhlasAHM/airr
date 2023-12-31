import { flights } from "../actions/constants";

const initState = {
    loading: false,
    departure_flights: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case flights.GET_DEPARTURE_FLIGHTS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case flights.GET_DEPARTURE_FLIGHTS_SUCCESS:
            state = {
                ...state,
                departure_flights: action.payload.departure_flights_,
                loading: false
            };
            break;

        case flights.GET_DEPARTURE_FLIGHTS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
