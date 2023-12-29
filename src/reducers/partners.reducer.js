import { partner_home } from '../actions/constants'

const initState = {
    loading: false,
    partners: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case partner_home.GET_PARTNERS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case partner_home.GET_PARTNERS_SUCCESS:
            state = {
                ...state,
                partners: action.payload.partners,
                loading: false
            };
            break;

        case partner_home.GET_PARTNERS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
