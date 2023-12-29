import { passengers } from './constants'

import axios from "../axios";

export const getPassenger = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: passengers.GET_SINGLE_PASSENGERS_REQUEST });
            const res = await axios.get(`en/api/passenger-facilities/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: passengers.GET_SINGLE_PASSENGERS_SUCCESS,
                    payload: {
                        passenger: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: passengers.GET_SINGLE_PASSENGERS_FAILURE })
        }
    }
}