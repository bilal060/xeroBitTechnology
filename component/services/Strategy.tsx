import React from 'react'
import Image from 'next/image'
import strategyimage from "../../assets/images/strategy.png"
import AnimatedButton from '../Animated-btn'
function Strategy() {
    return (
        <>
            <section className='services-strategy img-right-contianer-out pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-5 col-12 mt-5 strategy-tabs content-center'>
                            <h6 className='font-weight-500 font-18-17 text-xero-primary'>Our strategy</h6>
                            <h2 className='font-weight-700 font-36-46 mt-2 text_center_justification'>How Analytics Helping Face Challenges</h2>
                            <nav className='mt-4'>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active nav_link btn_toggle font-weight-400 font-16-15 text-dark-gray" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Our Value</button>
                                    <button className="nav-link nav_link btn_toggle font-weight-400 font-16-15 text-dark-gray" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Our Vision</button>
                                    <button className="nav-link nav_link btn_toggle font-weight-400 font-16-15 text-dark-gray" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Our Mission</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                    <p className='pt-5 text_center_justification'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                                    <ul className='about-items content-center'>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <div className="btn-center">
                                            <AnimatedButton text='Learn More' />
                                        </div>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                                    <p className='pt-5 text_center_justification'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                                    <ul className='about-items content-center'>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <div className="btn-center">
                                            <AnimatedButton text='Learn More' />
                                        </div>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                    <p className='pt-5 text_center_justification'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                                    <ul className='about-items content-center'>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <li>Enim adminim veniam, quis nostrud tation</li>
                                        <div className="btn-center">
                                            <AnimatedButton text='Learn More' />
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 g-0 image_right_containe-1 display_none'>
                            <Image src={strategyimage} alt="strategyimage" className='img-fluid float-end' />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Strategy
