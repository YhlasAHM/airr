import React, { useEffect, useState } from 'react'
import './Counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {

    const [counterState, setCounterState] = useState(false)

    return (
        <>
            <div className='Counter'>
                <div class="counter-one">
                    <div class="container">
                        <ScrollTrigger onEnter={() => setCounterState(true)}>
                            <ul class="counter-one__box list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 justify-content-center">
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <div className="col d-flex justify-content-center text-center text-white" key={item}>
                                            <li key={item} class="w-100 h-100" data-wow-delay="100ms">
                                                <div class="counter-one__icon">
                                                    <i class="icon-pilot-1"></i>
                                                    <div class="counter-one__shape"></div>
                                                </div>
                                                <div class="counter-one__content count-box">
                                                    <h3 class="count-text" data-stop="395" data-speed="1500">
                                                        {
                                                            counterState ?
                                                                <CountUp duration={2.75} start={0} end={95} />
                                                                : <CountUp />
                                                        }
                                                    </h3>
                                                    <p class="counter-one__text">Professional pilots</p>
                                                </div>
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </ScrollTrigger>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Counter