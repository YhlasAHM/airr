import { services } from './constants'

import axios from "../axios";

export const getServices = () => {

    return async dispatch => {

        try {

            dispatch({ type: services.GET_SERVICES_REQUEST });
            const res = await axios.get(`en/api/services/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: services.GET_SERVICES_SUCCESS,
                    payload: {
                        services: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: services.GET_SERVICES_FAILURE })
        }
    }
}