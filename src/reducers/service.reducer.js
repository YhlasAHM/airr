import { services } from '../actions/constants'

const initState = {
    loading: false,
    service: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case services.GET_SINGLE_SERVICES_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case services.GET_SINGLE_SERVICES_SUCCESS:
            state = {
                ...state,
                service: action.payload.service,
                loading: false
            };
            break;

        case services.GET_SINGLE_SERVICES_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
