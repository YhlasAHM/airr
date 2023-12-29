import { partner_home } from '../actions/constants'

const initState = {
    loading: false,
    partner_home: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case partner_home.GET_PARTNER_HOME_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case partner_home.GET_PARTNER_HOME_SUCCESS:
            state = {
                ...state,
                partner_home: action.payload.partner_home,
                loading: false
            };
            break;

        case partner_home.GET_PARTNER_HOME_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
