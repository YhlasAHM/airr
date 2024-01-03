import { gallery } from "../actions/constants";

const initState = {
    loading: false,
    gallery_single: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case gallery.GET_GALLERY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case gallery.GET_GALLERY_SUCCESS:
            state = {
                ...state,
                gallery_single: action.payload.gallery_,
                loading: false
            };
            break;

        case gallery.GET_GALLERY_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
