import React from 'react'
import './Header.css'

import logo from '../../assets/images/logo_one.png'
import logo_one from '../../assets/images/shygar.png'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import sidebar_logo from '../../assets/images/Frame_7101.png'

import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom'

import Language_dropdown from './Header_language_dropdown';

const Header_main = () => {

    const menuActive = () => {
        const mobile_sidebar = document.querySelector('.mobile_sidebar')
        mobile_sidebar.classList.toggle('active')
    }

    return (
        <>
            <div className="Header_main pt-3 mb-3">
                <div className='container'>
                    <div className='d-flex justify-content-between text-center' style={{ alignItems: 'center' }}>
                        <div className='header_main_left'>
                            <div className="image">
                                <img src={logo} alt="" className='imgg' />
                            </div>
                            <h6>HALKARA HOWA MENZILI</h6>
                        </div>
                        <div className='d-xl-none'>
                            <div className='menu_icon' onClick={menuActive}><MenuIcon /></div>
                        </div>
                        <div className="header_main_right d-none d-md-flex" style={{ alignItems: 'center' }}>
                            <div className='text pe-2'>
                                <h6>ARKADAG SERDARLY</h6>
                                <h6>BAGTYYAR YASLAR YYLY</h6>
                            </div>
                            <div className='image'>
                                <img src={logo_one} alt="" className='imggg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile_sidebar d-xl-none pt-4 p-3'>
                    <div className='sidebar_close_icon text-white d-flex justify-content-end'>
                        <div className='close_icon' onClick={menuActive}><CloseIcon /></div>
                    </div>
                    <div className='sidebar_logo'>
                        <div className='d-flex justify-content-center'>
                            <div className="image mt-4">
                                <img src={sidebar_logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_main mt-3">
                        <h5 className='text-white'> <Link to={'/'}>Bas sahypa</Link></h5>
                        <h5 className='text-white'><Link to={'/about'}>Biz barada</Link></h5>
                        <h5 className='text-white'><Link to={'/online_table'}>Onlayn tablo</Link></h5>
                        <h5 className='text-white'><Link to={'/passengers'}>Yolagcylar</Link></h5>
                        <h5 className='text-white'><Link to={'/business'}>Isewurler</Link></h5>
                        <h5 className='text-white'><Link to={'/services'}>Hyzmatlarymyz</Link></h5>
                        <h5 className='text-white'><Link to={'/news'}>Tazelikler</Link></h5>
                        <h5 className='text-white'><Link to={'/gallery'}>Galereya</Link></h5>
                        <h5 className='text-white'><Link to={'/contact'}>Habarlasmak</Link></h5>
                    </div>
                    <div className='sidebar_footer mt-3'>
                        <div className='phone_and_email_sidebar d-flex' style={{ flexDirection: 'column' }}>
                            <div className='phone_icon d-flex text-white'>
                                <div className='icon me-2'>
                                    <PhoneIcon />
                                </div>
                                <div className='text'>
                                    +993 12 234923
                                </div>
                            </div>
                            <div className='email_icon d-flex text-white mt-2'>
                                <div className='icon me-2'>
                                    <EmailIcon />
                                </div>
                                <div className="text">
                                    asb@ashgabatairport.gov.tm
                                </div>
                            </div>
                            <div className="main-header-three__social mt-2">
                                <a href="#" className='text-white'>Sorag-jogap gullugy</a>
                                <a href="#"> <Language_dropdown /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_main