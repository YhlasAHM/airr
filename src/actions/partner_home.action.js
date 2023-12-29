import { partner_home } from './constants'

import axios from "../axios";

export const getPartner_home = () => {

    return async dispatch => {

        try {

            dispatch({ type: partner_home.GET_PARTNER_HOME_REQUEST });
            const res = await axios.get(`en/api/partnerships/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: partner_home.GET_PARTNER_HOME_SUCCESS,
                    payload: {
                        partner_home: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: partner_home.GET_PARTNER_HOME_FAILURE })
        }
    }
}