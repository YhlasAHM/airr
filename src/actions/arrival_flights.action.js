import { flights } from "./constants";

import axios from "../axios";

export const getArrival_flights = () => {

    return async dispatch => {

        try {

            dispatch({ type: flights.GET_ARRIVAL_FLIGHTS_REQUEST });
            const res = await axios.get(`en/api/arrival-flights/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: flights.GET_ARRIVAL_FLIGHTS_SUCCESS,
                    payload: {
                        arrival_flights_: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: flights.GET_ARRIVAL_FLIGHTS_FAILURE })
        }
    }
}