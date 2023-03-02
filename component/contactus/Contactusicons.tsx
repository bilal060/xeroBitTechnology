import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import callicon from "../../assets/images/call.svg"
import emailicon from "../../assets/images/email.svg"
import locationicon from "../../assets/images/location.svg"

const Contactusicons = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-sm-12'>
                        <div className='contact-icons'>
                            <div className='big-icon'>
                                <Image src={callicon} alt="call" />
                            </div>
                            <div className='text-icons'>
                                <h3>Phone Number</h3>
                                <p>+1 234 56789</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-12'>
                        <div className='contact-icons'>
                            <div className='big-icon'>
                                <Image src={emailicon} alt="call" />
                            </div>
                            <div className='text-icons'>
                                <h3>Mail</h3>
                                <p>yourmail@mail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-12'>
                        <div className='contact-icons'>
                            <div className='big-icon'>
                                <Image src={locationicon} alt="call" />
                            </div>
                            <div className='text-icons'>
                                <h3>Address</h3>
                                <p>Your address goes here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactusicons
