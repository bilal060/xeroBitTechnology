import React from 'react'
import Image from 'next/image'
import contactusimage from "../assets/images/contactus.png"
import AnimatedButton from './Animated-btn'

const Contactus = () => {
    return (
        <>
            <section className='contactus pt-5 pb-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-sm-12 col-md-6 col-lg-5 content-center'>
                            <h6 className='font-weight-500 pb-3 text_center_justification'>  contact us </h6>
                            <h2 className='font-weight-700 text_center_justification'>fill out this form to get started</h2>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm mt-2"
                            >
                                <div className="row gy-4">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control custom-input rounded-1"
                                                name="firstname"
                                                id="email"
                                                placeholder="First Name*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control custom-input rounded-1"
                                                name="lastname"
                                                id="email"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control custom-input rounded-1"
                                                name="email"
                                                id="email"
                                                placeholder="Email*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control custom-input rounded-1"
                                                name="number"
                                                id="text"
                                                placeholder="Phone*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control custom-control rounded-1"
                                                id="message"
                                                cols={30}
                                                rows={6}
                                                placeholder="Message*"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="btn-center">
                                            <AnimatedButton text='Send Message' />
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-7'>
                            <Image src={contactusimage} alt="contactusimage" className='img-fluid contactus-image ms-auto rounded-4' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus
