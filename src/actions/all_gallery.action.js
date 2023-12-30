import { gallery } from "./constants";

import axios from "../axios";

export const getAllGallery = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: gallery.GET_ALL_GALLERY_REQUEST });
            const res = await axios.get(`en/api/media/`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: gallery.GET_ALL_GALLERY_SUCCESS,
                    payload: {
                        allgallery: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: gallery.GET_ALL_GALLERY_FAILURE })
        }
    }
}