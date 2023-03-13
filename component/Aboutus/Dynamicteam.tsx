import React from 'react'
import Image from 'next/image'
import aboutimage from "../../assets/images/abouthome.svg"
import AnimatedButton from '../Animated-btn'
import ticker from '../../assets/images/ticker.svg'

function Dynamicteam() {
    return (
        <>
            <section className='dynamic-team pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12 content-center'>
                            <h2 className='px-2 font-36-46 section-sub-heading text-capital text_center_justification pb-4'>Our Approach to Digital Solutions</h2>
                            <p className='px-2 font-16 font-weight-400 text-dark-gray pt-1 pb-4'>At Xero Bit Technology, we believe in a client-centric approach to digital solutions. Our team of experts works closely with you to understand your unique business needs and develop a customized strategy that delivers superior results. From concept to launch, we stay with you every step of the way, ensuring that you are fully satisfied with the end product.</p>
                            <ul className='p-0 font-family-primary' >
                                <li className='font-16 d-flex align-items-center gap-16px'>
                                    <Image src={ticker} alt='ticker-img' className='mb-2' />
                                    <p className='font-weight-500 text-dark-gray'>We use the latest tools and technologies to deliver digital solutions that are fast, efficient, and responsive.</p>
                                </li>
                                <li className='font-16 d-flex align-items-center gap-16px'>
                                    <Image src={ticker} alt='ticker-img' className='mb-2' />
                                    <p className='font-weight-500 text-dark-gray'>Our solutions are designed to be scalable, ensuring that your business can grow and evolve without being held back by technological limitations.</p>
                                </li>
                                <li className='font-16 d-flex align-items-center gap-16px'>
                                    <Image src={ticker} alt='ticker-img' className='mb-2' />
                                    <p className='font-weight-500 text-dark-gray'>With our innovative digital solutions, you can stay ahead of the curve and remain competitive in today fast-paced digital landscape.</p>
                                </li>
                            </ul>

                            <div className="btn-center  px-2">
                                <AnimatedButton hrefto="contactus" light={true} text='Get Started Today' />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 d-flex align-items-center pb-2 d-md-block d-none'>
                            <Image src={aboutimage} alt="dynamicteam-image" className='ms-auto img-fluid align-middle' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dynamicteam
