import { gallery } from "../actions/constants";

const initState = {
    loading: false,
    gallery_: [],
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
            console.log('state', state.gallery_)
            state = {
                ...state,
                gallery_: [...state.gallery_, action.payload.gallery],
                loading: false
            };
            break;

        case gallery.GET_GALLERY_FAILURE:
            state = {
                ...state,
                gallery_: action.payload.gallery,
            };
            break;
    }
    return state
};
