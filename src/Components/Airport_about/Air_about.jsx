import React from 'react'
import './Air_about.css'

import { Air_button } from '../Button/Air_button'

import plane from '../../assets/images/Plane_23.png'
import { Translate } from '../Translate/Translate'


import left_image from '../../assets/images/cta-one-bg-shape.png'
import right_image from '../../assets/images/request-shape-1.png'

const Air_about = () => {

    return (
        <>
            <div class="we_flyy" id="air_about">
                <div className="right_image">
                    <img src={right_image} alt="" style={{ display: 'block' }} />
                </div>
                <div className="left_image_one" >
                    <img src={left_image} alt="" />
                </div>
                <div class="container">
                    <div className="row">
                        <div class="col">
                            <div>
                                <h2 class="text-white mb-4"><Translate title='Ashgabat_International_Airport' /></h2>
                                <p class="text-white"><Translate title='second_section_about' />
                                </p>
                                <div className='mt-4'>
                                    <Air_button title="extension" img={plane} background_btn='white' color_btn='#009000' />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='rotate_image'>
                                <div className='img_one'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                                <div className='img_two'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                                <div className='img_three'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Air_about