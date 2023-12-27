import React, { useEffect, useState } from 'react'
import './Page.css'

import Airport_about from '../../Airport_about/Air_about'

import Online_table from '../../Online_table/Online_table'
import Counter from '../../Counter/Counter'
import Passenger from '../../Passenger/Passenger'
import Business from '../../Business/Business'
import Services from '../../Services/Services'
import News from '../../News/News'
import Video from '../../Video/Video'
import Partners from '../../Partners/Partners'

const Page = () => {

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const [name, setName] = useState('home')

    useEffect(() => {
        const targetSections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setName(entry.target.getAttribute("id"))
                }
            })
        }, options);

        targetSections.forEach((section) => {
            observer.observe(section);
        });
    }, []);


    return (
        <>
            <div className='Page'>
                <section id="air_about">
                    <Airport_about />
                </section>
                <section id='online_table'>
                    <Online_table visible={name} />
                </section>
                <section id="counter">
                    <Counter />
                </section>
                <section id='passenger'>
                    <Passenger visible={name} />
                </section>
                <section id="business">
                    <Business visible={name} />
                </section>
                <section id='services'>
                    <Services />
                </section>
                <section id='news'>
                    <News visible={name} />
                </section>
                <section id='galereya'>
                    <Video visible={name} />
                </section>
                <section id='partners'>
                    <Partners visible={name} />
                </section>
            </div>
        </>
    )
}

export default Page