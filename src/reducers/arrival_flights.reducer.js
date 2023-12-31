import { flights } from "../actions/constants";

const initState = {
    loading: false,
    arrival_flights: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case flights.GET_ARRIVAL_FLIGHTS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case flights.GET_ARRIVAL_FLIGHTS_SUCCESS:
            state = {
                ...state,
                arrival_flights: action.payload.arrival_flights_,
                loading: false
            };
            break;

        case flights.GET_ARRIVAL_FLIGHTS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
