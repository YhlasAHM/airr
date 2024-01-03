import { gallery } from "./constants";

import axios from "../axios";

export const getVideo = (props) => {

    return async dispatch => {

        try {

            dispatch({ type: gallery.GET_VIDEO_REQUEST });
            const res = await axios.get(`en/api/media/videos/${props}`);
            if (res.status === 200 || res.status == 201) {
                dispatch({
                    type: gallery.GET_VIDEO_SUCCESS,
                    payload: {
                        video_: res.data
                    }
                });
            }
        } catch (error) {
            dispatch({ type: gallery.GET_VIDEO_FAILURE })
        }
    }
}