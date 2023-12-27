import React from 'react'
import './Services.css'

import plane from '../../assets/images/Frame_plane_one.png'

import img from '../../assets/images/carousel_img.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import left from '../../assets/images/Vector_one.png'
import right from '../../assets/images/Vector_two.png'

const Services = () => {

    const state = {
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
        navText: [`<img src=${left} alt="" />   `, `<img src=${right} alt="" />`]
    }

    return (
        <>
            <div class="price-one" id="services">
                <div class="container">
                    <div class="row" style={{ position: 'relative' }}>
                        <div class="col-xl-4">
                            <div class="price-one__left">
                                <div class="section-title text-left">
                                    <h3 class="fw-bold">ASGABAT HOWA MENZILININ <br /> HYZMATLARY <img src={plane} alt="" /></h3>
                                </div>
                                <p class="price-one__text">Howa menzilinin ulanyjylary ucin kop hyzmatlar bar:
                                    Dukanlar we kafeler, Cagalar oyun meydancasy, CIP zal, myhmanhanalar, Awtoulag
                                    duralgasy, goslary saklamak, lukmancylyk komegi  </p>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <OwlCarousel
                                navText={state.navText}
                                items={3}
                                className="owl-theme"
                                nav
                                margin={8} >
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <div class="item" key={item}>
                                            <div class="blog-one__single">
                                                <div class="blog-one__img">
                                                    <img src={img} alt="" />
                                                    <a href="#" className='text-white' style={{ textDecoration: 'none' }}>
                                                        <h4>Lorem, ipsum dolor.</h4>
                                                        <div className='text'> Lorem ipsum dolor sit amet.</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services