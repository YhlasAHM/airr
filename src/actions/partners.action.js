import { partner_home } from './constants'

import axios from "../axios";

export const getPartners = () => {

    return async dispatch => {

        try {

            dispatch({ type: partner_home.GET_PARTNERS_REQUEST });
            const res = await axios.get(`en/api/partner-facilities`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: partner_home.GET_PARTNERS_SUCCESS,
                    payload: {
                        partners: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: partner_home.GET_PARTNERS_FAILURE })
        }
    }
}