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
                                <Image src={callicon} alt="callicon" className='img-fluid' />
                            </div>
                            <div className='text-icons align-items-center'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center '>Phone Number</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center m-0 pt-2'><a href="tel:+971521647839">+971521647839</a></p>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center m-0 pt-2'><a href="tel:+971525278207">+971525278207</a></p></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-12 mt-2 mb-2'>
                        <div className='contact-icons gap-43px h-100 px_45_40 rounded-16'>
                            <div className='big-icon'>
                                <Image src={emailicon} alt="emailicon" className='img-fluid' />
                            </div>
                            <div className='text-icons align-items-center'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center '>Mail</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center m-0 pt-2'><a href='mailto:bilal.xbt@@gmail.com'>support@xerobittechnology.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-12 mt-2 mb-2'>
                        <div className='contact-icons gap-43px h-100 px_45_40 rounded-16'>
                            <div className='big-icon'>
                                <Image src={locationicon} alt="locationicon" className='img-fluid' />
                            </div>
                            <div className='text-icons align-items-center'>
                                <h3 className='font-weight-700 font-24-100 text_center_justification text-md_center '>Address</h3>
                                <p className='font-weight-400 font-16-100 text-dark-gray text_center_justification text-md_center m-0 pt-2'>Alfahad build 6 jumerah 1, Dubai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactusicons
