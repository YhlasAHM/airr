import { partner_home } from './constants'

import axios from "../axios";

export const getPartner = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: partner_home.GET_SINGLE_PARTNERS_REQUEST });
            const res = await axios.get(`en/api/partner-facilities/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: partner_home.GET_SINGLE_PARTNERS_SUCCESS,
                    payload: {
                        partner: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: partner_home.GET_SINGLE_PARTNERS_FAILURE })
        }
    }
}