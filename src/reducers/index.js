import { combineReducers } from "redux";

import newsReducer from "./news.reducer";

import newReducer from './new.reducer'

import servicesReducer from './services.reducer'

import serviceReducer from './service.reducer'

import passengersReducer from "./passengers.reducer";

import passengerReducer from './passenger.reducer'

import partner_homeReducer from "./partner_home.reducer";

import partnersReducer from './partners.reducer'

import partnerReducer from './partner.reducer'

import galleryReducer from "./gallery.reducer";

import all_galleryReducer from "./all_gallery.reducer";

import arrival_flightsReducer from './arrival_flights.reducer'

import departure_flightsReducer from './departure_flights.reducer'

import videoReducer from './video.reducer'

const RootReducer = combineReducers({
    news: newsReducer,
    new: newReducer,
    services: servicesReducer,
    service: serviceReducer,
    passengers: passengersReducer,
    passenger: passengerReducer,
    partner_home: partner_homeReducer,
    partners: partnersReducer,
    partner: partnerReducer,
    gallery: galleryReducer,
    allgallery: all_galleryReducer,
    arrival_flights: arrival_flightsReducer,
    departure_flights: departure_flightsReducer,
    video: videoReducer,
});

export default RootReducer;