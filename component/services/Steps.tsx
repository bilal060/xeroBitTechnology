import React from 'react'
import Image from 'next/image'
import stepsison from "../../assets/images/steps.svg"
function Steps() {
    return (
        <>
            <section className='services-process'>
                <div className="container">
                    <div className="services_typoghrapy mb-5 pb-5">
                        <h6>Our process</h6>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p className='steps-discrptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan
                            <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    </div>
                    <div className="row mt-5 g-0">
                        <div className="col-md-2 offset-md-1">
                            <div className="step-icon">
                                <Image src={stepsison} alt="step-1" className='mx-auto' />
                            </div>
                            <div className='step-bar'>
                                <span></span>
                            </div>
                            <div className="step-number">Step 1</div>
                            <div className="step-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="step-icon">
                                <Image src={stepsison} alt="step-1" className='mx-auto' />
                            </div>
                            <div className='step-bar'>
                                <span></span>
                            </div>
                            <div className="step-number">Step 2</div>
                            <div className="step-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="step-icon">
                                <Image src={stepsison} alt="step-1" className='mx-auto' />
                            </div>
                            <div className='step-bar'>
                                <span></span>
                            </div>
                            <div className="step-number">Step 3</div>
                            <div className="step-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="step-icon">
                                <Image src={stepsison} alt="step-1" className='mx-auto' />
                            </div>
                            <div className='step-bar'>
                                <span></span>
                            </div>
                            <div className="step-number">Step 4</div>
                            <div className="step-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="step-icon">
                                <Image src={stepsison} alt="step-1" className='mx-auto' />
                            </div>
                            <div className='step-bar'>
                                <span></span>
                            </div>
                            <div className="step-number">Step 5</div>
                            <div className="step-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Steps
