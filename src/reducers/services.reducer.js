import { services } from '../actions/constants'

const initState = {
    loading: false,
    services: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case services.GET_SERVICES_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case services.GET_SERVICES_SUCCESS:
            state = {
                ...state,
                services: action.payload.services,
                loading: false
            };
            break;

        case services.GET_SERVICES_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
