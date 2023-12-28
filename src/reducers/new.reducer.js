import { news } from "../actions/constants";

const initState = {
    loading: false,
    new: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case news.GET_SINGLE_NEW_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case news.GET_SINGLE_NEW_SUCCESS:
            state = {
                ...state,
                new: action.payload.new,
                loading: false
            };
            break;

        case news.GET_SINGLE_NEW_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
