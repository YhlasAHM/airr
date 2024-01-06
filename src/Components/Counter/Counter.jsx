import React, { useState } from 'react'
import './Counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import Grouop_one from '../../assets/images/Group_one.png'
import Grouop_two from '../../assets/images/Group_two.png'
import Grouop_three from '../../assets/images/Group_three.png'
import Grouop_four from '../../assets/images/Group_four.png'


const Counter = () => {

    const images = [
        { image: Grouop_one, count: '15000000', content: 'Ýolagçy sany' },
        { image: Grouop_two, count: '150', content: 'Ugur sany' },
        { image: Grouop_four, count: '100000', content: 'Ýük möçberi(tonna)' },
        { image: Grouop_three, count: '250', content: 'Uçar sany' }]

    const [counterState, setCounterState] = useState(false)

    return (
        <>
            <div className='Counter'>
                <div class="counter-one">
                    <div class="container">
                        <ScrollTrigger onEnter={() => setCounterState(true)}>
                            <ul class="counter-one__box list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 justify-content-center">
                                {
                                    images.map((item, index) => (
                                        <div className="col d-flex justify-content-center text-center text-white" key={index}>
                                            <li class="w-100 h-100" data-wow-delay="100ms">
                                                <div class="counter-one__icon">
                                                    <img src={item.image} alt="" height={'71px'} />
                                                    <div class="counter-one__shape"></div>
                                                </div>
                                                <div class="counter-one__content count-box">
                                                    <h3 class="count-text" data-stop="395" data-speed="1500">
                                                        {
                                                            counterState ?
                                                                <CountUp duration={2.75} start={0} end={item.count} />
                                                                : <CountUp />
                                                        }
                                                        {index == 1 ? '+' : ''}
                                                        {index == 0 ? '+' : ''}
                                                        {index == 3 ? '+' : ''}
                                                    </h3>
                                                    <p class="">{item.content}</p>
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