import React from 'react'
import './About.css'

import { useTranslation } from "react-i18next";
import About_card from '../../About_card/About_card';

import img from '../../../assets/images/about_img.jpg'

import img_one from '../../../assets/images/about_img1.png'

import img_two from '../../../assets/images/about_img2.png'

import img_three from '../../../assets/images/about_img3.jpg'


const About = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className='About mt-3 mb-5'>
                <div className='container'>
                    <div className='mt-3 mb-5'>
                        <About_card title={'Biz barada'} content='' image={img} one={2} two={1} button_='' />
                    </div>
                    <div className='row row-cols-sm-2 row-cols-1 g-3'>
                        <div className="col">
                            <About_card navigate__='/about/1' width_='20rem' title={'Howa menzilinin taryhy'} content='Turkmenistanyn howa flotunyn osusinin taryhy' image={img_one} one={1} two={2} button_={true} />
                        </div>
                        <div className="col">
                            <About_card navigate__='/about/2' width_='20rem' title={'Adminstratsiýa we Howa menzilinin gulluklary'} content='Halkara howa menzili bilen habarlasmak ucin maglumatlar we hyzmatlar' image={img_two} one={1} two={2} button_={true} />
                        </div>
                        <div className="col">
                            <About_card navigate__='/news' width_='20rem' title={'Tazelikler'} content='Howa menziliniň ýerine ýetirýän işleri we şuňa meňzeş wakalar barada' image={img_three} one={1} two={2} button_={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About