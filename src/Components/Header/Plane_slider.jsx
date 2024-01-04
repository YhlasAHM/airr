import React from 'react'

import { Air_button } from '../Button/Air_button'

import plane from '../../assets/images/Plane_2.png'
import plane_one from '../../assets/images/Group_1.png'
import Marquee from 'react-fast-marquee';

import imgg from '../../assets/images/Sky_2.png'

import './Header.css'

import { useTranslation } from "react-i18next";


const Plane_slider = () => {

    const { t } = useTranslation()

    return (
        <>
            <div class="main-slider-three clearfix">
                <div class="swiper-container">
                    <div class="swiper-slide">
                        <Marquee>
                            <img src={imgg} alt="" />
                        </Marquee>
                    </div>
                    <div className='slider_overlay'>
                        <div className="container">
                            <div className="row w-100">
                                <div className="col-12 col-lg-6">
                                    <h2 className='fw-bold'>{t('Ashgabat_International_Airport')}</h2>
                                    <div className="col-md-10 col-12">
                                        <div className='mt-5 d-block d-xl-flex justify-content-between text-center'>
                                            <Air_button navigate_='/online_table' title="online_table" img={plane_one} background_btn='#009000' color_btn='white' />
                                            <Air_button navigate_='/services' title="services" img={plane_one} background_btn='#009000' color_btn='white' />
                                            <Air_button navigate_='/passengers' title="passengers" img={plane_one} background_btn='#009000' color_btn='white' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='slider_image'>
                                        <img src={plane} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plane_slider