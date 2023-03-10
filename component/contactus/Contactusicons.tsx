import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import callicon from "../../assets/images/call.svg"
import emailicon from "../../assets/images/email.svg"
import locationicon from "../../assets/images/location.svg"

const Contactusicons = () => {
    return (
        <>
            <div className='container font-family-primary mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-12 mt-2 mb-2'>
                        <div className='contact-icons gap-43px h-100 px_45_40 rounded-16'>
                            <div className='big-icon'>
                                <Image src={callicon} alt="call" className='img-fluid' />
                            </div>
                            <div className='text-icons'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center pt-3'>Phone Number</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center pt-2'>+1 234 56789</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-12 mt-2 mb-2'>
                        <div className='contact-icons gap-43px h-100 px_45_40 rounded-16'>
                            <div className='big-icon'>
                                <Image src={emailicon} alt="call" className='img-fluid' />
                            </div>
                            <div className='text-icons'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center pt-3'>Mail</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center pt-2'>yourmail@mail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-12 mt-2 mb-2'>
                        <div className='contact-icons gap-43px h-100 px_45_40 rounded-16'>
                            <div className='big-icon'>
                                <Image src={locationicon} alt="call" className='img-fluid' />
                            </div>
                            <div className='text-icons'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center pt-3'>Address</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center pt-2'>Your address goes here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactusicons
