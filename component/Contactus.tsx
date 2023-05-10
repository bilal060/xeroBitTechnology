import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import contactusimage from "../assets/images/contactus.png"
import AnimatedButton from './Animated-btn'
import signalBar from '../assets/images/signalBars.svg'
import signalBarBlack from '../assets/images/signalBarBlack.svg'
import axios from 'axios'


const Contactus = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');

    const resetForm = () => {
        setfirstName('');
        setlastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post(`${process.env.BACKEND_API_URL}/contactus/add`, {
                email,
                firstName,
                lastName,
                phoneNo: phone,
                massage: message,
            })
            .then((response) => {
                setSuccessMessage('Message send successfully!');
                setloading(false);
                resetForm();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <section className='contactus pt-5 pb-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-sm-12 col-md-6 col-lg-5 content-center'>
                            <h6 className='font-weight-500 section-first-heading  pb-2 text_center_justification'>  contact us </h6>
                            <h2 className='font-weight-700 font-36-46 section-sub-heading  text-capital text_center_justification'>Innovate With confidence With Xero Bit Technology </h2>
                            <p className='font-18 text-dark-gray font-weight-400 mb-5'>
                                Ready to make your business stand out in this digital world? Contact us today to arrange a consultation with one of our experts
                            </p>
                            {successMessage && <p>{successMessage}</p>}
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
                                                value={firstName}
                                                placeholder="First Name*"
                                                onChange={(e) => { setfirstName(e.target.value) }}
                                                required
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
                                                value={lastName}
                                                placeholder="Last Name"
                                                onChange={(e) => { setlastName(e.target.value) }}
                                                required
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
                                                value={email}
                                                placeholder="Email*"
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                required
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
                                                value={phone}
                                                placeholder="Phone*"
                                                onChange={(e) => { setPhone(e.target.value) }}
                                                required
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
                                                value={message}
                                                placeholder="Message*"
                                                defaultValue={""}
                                                onChange={(e) => { setMessage(e.target.value) }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="btn-center">
                                            <button
                                                type='submit'
                                                className="button button--shikoba button--round-s button--border-thin" onClick={(e) => handleSubmit(e)}>
                                                <i className="button__icon icon icon-microphone"></i>
                                                <div className='bar-icon'>
                                                    <Image src={signalBar} alt='' />
                                                </div>
                                                <span className='btn_custome d-flex justify-content-center align-items-center'>Send Us Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-7 d-md-flex d-none justify-content-center align-items-center'>
                            <Image src={contactusimage} alt="contactusimage" className='img-fluid contactus-image ms-auto rounded-4' />
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Contactus
