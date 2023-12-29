import { passengers } from './constants'

import axios from "../axios";

export const getPassengers = () => {

    return async dispatch => {

        try {

            dispatch({ type: passengers.GET_PASSENGERS_REQUEST });
            const res = await axios.get(`en/api/passenger-facilities/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: passengers.GET_PASSENGERS_SUCCESS,
                    payload: {
                        passengers: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: passengers.GET_PASSENGERS_FAILURE })
        }
    }
}