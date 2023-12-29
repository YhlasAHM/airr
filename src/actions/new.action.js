import { news } from "./constants";

import axios from "../axios";

export const getNew = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: news.GET_SINGLE_NEW_REQUEST });
            const res = await axios.get(`en/api/news/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: news.GET_SINGLE_NEW_SUCCESS,
                    payload: {
                        new: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: news.GET_SINGLE_NEW_FAILURE })
        }
    }
}