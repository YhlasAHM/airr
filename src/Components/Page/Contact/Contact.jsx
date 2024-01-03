import React from 'react'
import './Contact.css'

const Contact = () => {

    return (
        <>
            <div class="contact-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="section-title__title">BIZ BILEN HABARLASYN</h2>
                    </div>
                    <div class="row">
                        {
                            [1, 2, 3].map(item => (
                                <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    <div class="contact-page__single">
                                        <div class="contact-page__title-box">
                                            <div class="contact-page__title">
                                                <span>know</span>
                                                <h3>About us</h3>
                                            </div>
                                            <div class="contact-page__icon">
                                                <span class="icon-flight-1"></span>
                                            </div>
                                        </div>
                                        <p class="contact-page__text">Non augue egestas, commodo velit eget, tellus.</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div class="google-map mb-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    class="google-map__one" allowfullscreen></iframe>

            </div>
        </>
    )
}

export default Contact