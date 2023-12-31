import { gallery } from "./constants";

import axios from "../axios";

export const getGallery = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: gallery.GET_GALLERY_REQUEST });
            const res = await axios.get(`en/api/media/image-album/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: gallery.GET_GALLERY_SUCCESS,
                    payload: {
                        gallery_: res.data.data.images
                    }
                });
            }
        } catch (error) {
            dispatch({ type: gallery.GET_GALLERY_FAILURE })
        }
    }
}