import React from 'react'
import './About.css'

import About_card from '../../About_card/About_card';

import img from '../../../assets/images/about_img.jpg'

import img_one from '../../../assets/images/about_img1.png'

import img_two from '../../../assets/images/about_img2.png'

import img_three from '../../../assets/images/about_img3.jpg'

const About = () => {

    return (
        <>
            <div className='About'>
                <div className='container'>
                    <div className='mt-3 mb-5'>
                        <About_card title={'about_us'} content='' image={img} one={2} two={1} button_='' />
                    </div>
                    <div className='row row-cols-sm-2 row-cols-1 g-3'>
                        <div className="col">
                            <About_card navigate__='/about/1' width_='20rem' title={'about_pg_card_one'} content='about_pg_card_one_text' image={img_one} one={1} two={2} button_={true} />
                        </div>
                        <div className="col">
                            <About_card navigate__='/about/2' width_='20rem' title={'about_pg_card_two'} content='about_pg_card_two_text' image={img_two} one={1} two={2} button_={true} />
                        </div>
                        <div className="col">
                            <About_card navigate__='/news' width_='20rem' title={'news'} content='about_pg_card_three_text' image={img_three} one={1} two={2} button_={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About