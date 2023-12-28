import { news } from '../actions/constants'

const initState = {
    loading: false,
    news: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case news.GET_NEWS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case news.GET_NEWS_SUCCESS:
            state = {
                ...state,
                news: action.payload.news,
                loading: false
            };
            break;

        case news.GET_NEWS_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
