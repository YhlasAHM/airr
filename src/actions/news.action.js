import { news } from './constants'

import axios from "../axios";

export const getNews = () => {

    return async dispatch => {

        try {

            dispatch({ type: news.GET_NEWS_REQUEST });
            const res = await axios.get(`en/api/news/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: news.GET_NEWS_SUCCESS,
                    payload: {
                        news: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: news.GET_NEWS_FAILURE })
        }
    }
}