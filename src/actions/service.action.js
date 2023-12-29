import { services } from './constants'

import axios from "../axios";

export const getService = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: services.GET_SINGLE_SERVICES_REQUEST });
            const res = await axios.get(`en/api/services/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: services.GET_SINGLE_SERVICES_SUCCESS,
                    payload: {
                        service: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: services.GET_SINGLE_SERVICES_FAILURE })
        }
    }
}