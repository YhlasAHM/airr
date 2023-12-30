import { gallery } from "../actions/constants";

const initState = {
    loading: false,
    allgallery_: [],
};

export default (state = initState, action) => {

    switch (action.type) {

        case gallery.GET_ALL_GALLERY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case gallery.GET_ALL_GALLERY_SUCCESS:
            console.log('state', state.gallery_)
            state = {
                ...state,
                allgallery_: action.payload.allgallery,
                loading: false
            };
            break;

        case gallery.GET_ALL_GALLERY_FAILURE:
            state = {
                ...initState,
            };
            break;
    }
    return state
};
