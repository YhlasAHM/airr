import { partner_home } from '../actions/constants'

const initState = {
    loading: false,
    partner: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case partner_home.GET_SINGLE_PARTNERS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case partner_home.GET_SINGLE_PARTNERS_SUCCESS:
            state = {
                ...state,
                partner: action.payload.partner,
                loading: false
            };
            break;

        case partner_home.GET_SINGLE_PARTNERS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
