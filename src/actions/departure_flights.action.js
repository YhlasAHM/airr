import { flights } from "./constants";

import axios from "../axios";

export const getDeparture_flights = () => {

    return async dispatch => {

        try {

            dispatch({ type: flights.GET_DEPARTURE_FLIGHTS_REQUEST });
            const res = await axios.get(`en/api/departure-flights/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: flights.GET_DEPARTURE_FLIGHTS_SUCCESS,
                    payload: {
                        departure_flights_: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: flights.GET_DEPARTURE_FLIGHTS_FAILURE })
        }
    }
}