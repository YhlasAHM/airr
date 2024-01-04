import React from 'react'

import './Footer.css'

import logo from '../../assets/images/logo_one.png'

import logo_onee from '../../assets/images/Frame_7101.png'

import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div className="Footer">
                <footer class="site-footer">
                    <div class="container">
                        <div class="site-footer__inner">
                            <div class="site-footer__shape-1 ">
                                <img src={logo} alt="" />
                            </div>
                            <div class="site-footer__top">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div class="footer-widget__column footer-widget__about">
                                            <div class="footer-widget__logo">
                                                <div className='text-white'>
                                                    <Link to={'/'}><img src={logo_onee} alt="" /></Link>
                                                </div>
                                            </div>
                                            <div class="footer-widget__about-text-box">
                                                <p class="text-white">Hazirki zaman terminallary,
                                                    birnace dilleri bilyan isgarler we yolagcylaryn rahatlygy.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div>
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title">YOLAGCYLAR UCIN</h3>
                                            </div>
                                            <ul class="footer-widget__Explore-list list-unstyled">
                                                <li><Link to={'/online_table'}>Onlayn tablo</Link></li>
                                                <li><a >Gatnawlaryn rejesi</a></li>
                                                <li><a >Goslary gecirmegin duzgunleri</a></li>
                                                <li><Link to={'/contact'}>Business Lounge</Link></li>
                                                <li><Link to={'/contact'}>Ucusyn on yanyndaky barlag</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                        <div class="footer-widget__column footer-widget__links">
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title">HYZMATDASLAR UCIN</h3>
                                            </div>
                                            <ul class="footer-widget__Explore-list list-unstyled">
                                                <li><Link to={'/about'}>Hyzmat edis nyrhnamalary</Link></li>
                                                <li><Link to={'/contact'}>Kargo terminaly</Link></li>
                                                <li><Link to={'/news'}>Awiakompaniyalar ucin</Link></li>
                                                <li><Link to={'/about'}>Yorite tehniki gullugy</Link></li>
                                                <li><Link to={'/about'}>UGAHE gullugy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div class="footer-widget__column footer-widget__Contact">
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title">HABARLASMAK UCIN</h3>
                                            </div>
                                            <ul class="footer-widget__Contact-list list-unstyled">
                                                <li>
                                                    <div class="icon">
                                                        <span class="fas fa-phone"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p><a href="tel:+9288006780">( 99312 ) 23-49-23</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="icon">
                                                        <span class="fas fa-envelope"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p><a href="mailto:needhelp@company.com">asb@ashgabatairport.gov.tm</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="icon">
                                                        <span class="fas fa-map-marker"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p className='text-white'>(99312) 23-48-17</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="site-footer__bottom">
                                <div class="site-footer__bottom-inner">
                                    <div class="site-footer__bottom-left">
                                        <p class="site-footer__bottom-text text-white">© 2024 Halkara Howa Menzili. Ahli hukuk goragly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer