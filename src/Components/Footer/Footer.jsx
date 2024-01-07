import React from 'react'

import './Footer.css'

import logo_onee from '../../assets/images/Frame_7101.png'

import { Link } from 'react-router-dom'

import { Translate } from '../Translate/Translate'


import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

import image from '../../assets/images/shapes/site-footer-shape-1.png'

import image_one from '../../assets/images/cta-one-bg-shape.png'
import image_two from '../../assets/images/request-shape-2.png'

const Footer = () => {

    return (
        <>
            <div className="Footer">
                <footer class="site-footer">
                    <div className='site-footer__shape-2'>
                        <img src={image_one} alt="" />
                    </div>
                    <div className='site-footer__shape-3'>
                        <img src={image_two} alt="" />
                    </div>
                    <div class="container">
                        <div class="site-footer__inner">
                            <div class="site-footer__shape-1 zoom-fade-1 ">
                                <img src={image} alt="" />
                            </div>
                            <div class="site-footer__top">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div class="footer-widget__column footer-widget__about">
                                            <div class="footer-widget__logo">
                                                <div className='text-white'>
                                                    <a href='#'><img src={logo_onee} alt="" /></a>
                                                </div>
                                            </div>
                                            <div class="footer-widget__about-text-box">
                                                <p class="text-white"><Translate title='footer_pg_text_one' /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div>
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title"><Translate title='passengers' /></h3>
                                            </div>
                                            <ul class="footer-widget__Explore-list list-unstyled">
                                                <li><Link to={'/online_table'}><Translate title='online_table' /></Link></li>
                                                <li><a><Translate title='footer_pg_text_two' /></a></li>
                                                <li><a><Translate title='footer_pg_text_three' /></a></li>
                                                <li><Link to={'/contact'}><Translate title='footer_pg_text_four' /></Link></li>
                                                <li><Link to={'/contact'}><Translate title='footer_pg_text_five' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                        <div class="footer-widget__column footer-widget__links">
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title"><Translate title='footer_pg_services' /></h3>
                                            </div>
                                            <ul class="footer-widget__Explore-list list-unstyled">
                                                <li><Link to={'/about'}><Translate title='footer_pg_services_one' /></Link></li>
                                                <li><Link to={'/contact'}><Translate title='footer_pg_services_two' /></Link></li>
                                                <li><Link to={'/news'}><Translate title='footer_pg_services_three' /></Link></li>
                                                <li><Link to={'/about'}><Translate title='footer_pg_services_four' /></Link></li>
                                                <li><Link to={'/about'}><Translate title='footer_pg_services_five' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div class="footer-widget__column footer-widget__Contact">
                                            <div class="footer-widget__title-box">
                                                <h3 class="footer-widget__title"><Translate title='footer_pg_contact' /></h3>
                                            </div>
                                            <ul class="footer-widget__Contact-list list-unstyled">
                                                <li className='d-flex text-white' style={{ alignItems: 'center' }}>
                                                    <div class="icon me-2">
                                                        <PhoneIcon />
                                                    </div>
                                                    <div class="text">
                                                        <a href="#tel:+99312234934">( 99312 ) 23-49-23</a>
                                                    </div>
                                                </li>
                                                <li className='d-flex text-white' style={{ alignItems: 'center' }}>
                                                    <div class="icon">
                                                        <EmailIcon />
                                                    </div>
                                                    <div class="text">
                                                        <a href="mailto:">asb@ashgabatairport.gov.tm</a>
                                                    </div>
                                                </li>
                                                <li className='d-flex text-white' style={{ alignItems: 'center' }}>
                                                    <div class="icon">
                                                        <EmailIcon />
                                                    </div>
                                                    <div class="text">
                                                        <span>(99312) 23-48-17</span>
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
                                        <p class="site-footer__bottom-text text-white"><Translate title='footer_pg_bottom' /></p>
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