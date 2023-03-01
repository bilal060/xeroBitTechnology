import React from 'react'
import Image from 'next/image'
import contactusimage from "../assets/images/contactus.png"

const Contactus = () => {
    return (
        <>
            <section className='contactus'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-sm-12 col-md-6 col-lg-5'>
                            <h5>  contact us </h5>
                            <h3 className='mt-2'>fill out this form to get started</h3>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm mt-5"
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
                                        <div className="form-group mt-3 pb-3 form-btn">
                                            <button type="button" className="btn_custome">Send Message</button>
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
