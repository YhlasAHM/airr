import React, { useEffect, useState } from 'react'
import './Header.css'

import { Link, useLocation } from 'react-router-dom'

import { useTranslation } from "react-i18next";

const Header_footer = () => {

    const { t } = useTranslation()

    const [visible_tab, setVisibleTab] = useState('home')

    const location = useLocation()

    useEffect(() => {

        if (location.pathname == '/') {
            setVisibleTab('home')
        }
        if (location.pathname == '/about') {
            setVisibleTab('air_about')
        }
        if (location.pathname == '/online_table') {
            setVisibleTab('online_table')
        }
        if (location.pathname == '/passengers') {
            setVisibleTab('passengers')
        }
        if (location.pathname == '/business') {
            setVisibleTab('business')
        }
        if (location.pathname == '/services') {
            setVisibleTab('services')
        }
        if (location.pathname == '/news') {
            setVisibleTab('news')
        }
        if (location.pathname == '/gallery') {
            setVisibleTab('gallery')
        }
        if (location.pathname == '/contact') {
            setVisibleTab('contact')
        }

    }, [location])

    return (
        <>
            <div className="Header_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='header_footer_left'>
                                <ul>
                                    <li>
                                        <Link to={'/'}>{t('home_page')}</Link>
                                        <div className={visible_tab == 'home' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/about'}>{t('about_us')}</Link>
                                        <div className={visible_tab == 'air_about' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/online_table'}>{t('online_table')}</Link>
                                        <div className={visible_tab == 'online_table' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/passengers'}>{t('passengers')}</Link>
                                        <div className={visible_tab == 'passengers' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/business'}>{t('business')}</Link>
                                        <div className={visible_tab == 'business' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/services'}>{t('services')}</Link>
                                        <div className={visible_tab == 'services' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/news'}>{t('news')}</Link>
                                        <div className={visible_tab == 'news' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/gallery'}>{t('gallery')}</Link>
                                        <div className={visible_tab == 'gallery' ? 'bottom_' : null}></div>
                                    </li>
                                    <li>
                                        <Link to={'/contact'}>{t('contact')}</Link>
                                        <div className={visible_tab == 'contact' ? 'bottom_' : null}></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_footer