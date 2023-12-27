import React from 'react'
import './Counter.css'

const Counter = () => {

    return (
        <>
            <div className='Counter'>
                <div class="counter-one">
                    <div class="container">
                        <ul class="counter-one__box list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 justify-content-center">
                            {
                                [1, 2, 3, 4].map(item => (
                                    <div className="col d-flex justify-content-center" key={item}>
                                        <li key={item} class="counter-one__single wow fadeInUp" data-wow-delay="100ms">
                                            <div class="counter-one__icon">
                                                <i class="icon-pilot-1"></i>
                                                <div class="counter-one__shape"></div>
                                            </div>
                                            <div class="counter-one__content count-box">
                                                <h3 class="count-text" data-stop="395" data-speed="1500">00</h3>
                                                <p class="counter-one__text">Professional pilots</p>
                                            </div>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter