import React from 'react'
import './Header.css'

import InfoPanel from './InfoPanel';
import Header_main from './Header_main';
import Header_footer from './Header_footer';
import Header_new_slider from './Header_news_slider';

const Navbar = () => {

    return (
        <div className='Navbar_wrapper'>

            <InfoPanel />
            <Header_main />
            <Header_footer />
            <Header_new_slider />
        </div >
    )
}

export default Navbar