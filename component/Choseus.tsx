import React from 'react'
import Image from 'next/image'
import Chooseusimage from '../assets/images/chooseUs.svg'
import ticker from '../assets/images/ticker.svg'
import AnimatedButton from './Animated-btn'
const Choseus = () => {
    return (
        <>
            <section className="choosus pt-5 font-family-primary pb-5 my-5 position-relative">
                <div className="choose-us container  g-0">
                    <div className='row m-0 align-items-center flex-row-reverse'>
                        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center choosus-img d-lg-block d-none p-0">
                            <Image src={Chooseusimage} alt="chooseus image" className='' />
                        </div>
                        <div className="col-sm-12 col-lg-6 col-lg-6">
                            <div className='container'>
                                <h6 className='section-first-heading text_center_justification pb-3'>Why choose us</h6>
                                <h2 className='section-sub-heading font-36-46'>Software Development Company that helps you succeed.</h2>
                                <p className='font-16 px-2 mb-4 pt-4 text-black'>At Xero Bit Technology, we are committed to delivering exceptional value to our clients. Here’s why Xero Bit Technology is an Ideal company for you.</p>
                                <ul className='p-0'>
                                    <li className='font-16 d-flex align-items-center gap-16px'>
                                        <Image src={ticker} alt='' />
                                        <p><span className='font-weight-700 font-18-17 text-dark-gray'>Customized solutions: </span>We take the time to understand your business needs and provide customized solutions that meet your unique requirements.
                                        </p>
                                    </li>
                                    <li className='font-16 d-flex align-items-center gap-16px'>
                                        <Image src={ticker} alt='' />
                                        <p><span className='font-weight-700 font-18-17 text-dark-gray'>Innovative approach: </span>We stay up-to-date with the latest technology and design trends to provide innovative solutions that help your business thrive.
                                        </p>
                                    </li>
                                    <li className='font-16 d-flex align-items-center gap-16px'>
                                        <Image src={ticker} alt='' />
                                        <p><span className='font-weight-700 font-18-17 text-dark-gray'>Exceptional customer service: </span>We pride ourselves on our commitment to customer satisfaction and work tirelessly to ensure that our clients are happy with our services.
                                        </p>
                                    </li>
                                    <li className='font-16 d-flex align-items-center gap-16px'>
                                        <Image src={ticker} alt='' />
                                        <p><span className='font-weight-700 font-18-17 text-dark-gray'>Experienced and professional team: </span>Our team of experts has years of experience in the technology and design industry, and is dedicated to helping your business succeed.
                                        </p>
                                    </li>
                                </ul>
                                <div className="btn-center">
                                    <AnimatedButton hrefto="contactus" light={true} text='Get Started Today' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choseus
