import { gallery } from "../actions/constants";

const initState = {
    loading: false,
    video_: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case gallery.GET_VIDEO_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case gallery.GET_VIDEO_SUCCESS:
            state = {
                ...state,
                video_: action.payload.video_,
                loading: false
            };
            break;

        case gallery.GET_VIDEO_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
