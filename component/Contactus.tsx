import React from 'react'
import Image from 'next/image'
import contactusimage from "../assets/images/contactus.png"

const Contactus = () => {
    return (
        <>
            <section className='contactus mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h5>  contact us </h5>
                            <h3>fill out this form to get started</h3>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                id="message"
                                                cols={30}
                                                rows={4}
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                defaultValue="Send Message"
                                                className="btn btn-primary"
                                            />
                                            <div className="submitting" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='col-md-7'>
                            <Image src={contactusimage} alt="contactusimage" className='contactus-image ms-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus
