import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/footerlogo.png'
import fbicon from '../assets/images/facebook.svg'
import linkicon from '../assets/images/linkedin.svg'
import instaicon from '../assets/images/insta.svg'
import twicon from '../assets/images/twit.svg'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer className="text-lg-start text-white xerobit-footer">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-md-5 col-lg-4 col-sm-12 mt-3 ps-0 pe-md-5">
                            <a className="navbar-brand" href="#">
                                <Image src={logo} alt="footer-logo" className='img-fluid footer-logo' />
                            </a>
                            <p>At Xero Bit Technology, we pride ourselves on delivering exceptional results for our clients. Over the years, we have worked with businesses of all sizes, across various industries, and helped them achieve their digital goals. Our portfolio of success stories includes numerous satisfied clients who have benefited from our expertise in digital strategy, UX design, product design, content strategy, website design, and social media management.
                            </p>
                            <div className="row">
                                <div className='col-2'>
                                    <a href=''><Image src={fbicon} alt="fbicons" className='fb-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={linkicon} alt="linkedinicons" className='lin-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={instaicon} alt="instagramicons" className='insta-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={twicon} alt="twittericons" className='tw-icon' /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6 mt-3 ps-md-5 p-0">
                            <h6 className="footer-heading">Services</h6>
                            <ul>
                                <li><a href='' >Digital Strategy</a></li>
                                <li><Link href='/services/uxuidesign' >UX Design</Link></li>
                                <li><a href='' >Product Design</a></li>
                                <li><a href='' >Content Strategy</a></li>
                                <li><a href='' >Design & Concept</a></li>
                                <li><a href='' >Social Media</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mt-3 ps-0">
                            <h6 className="footer-heading">Quick Links</h6>
                            <ul>
                                <li><Link href='/services' >Services</Link></li>
                                <li><a href='/aboutus' >About Us</a></li>
                                <li><a href='' >Testimonials</a></li>
                                <li><a href='/blog' >Blog</a></li>
                                <li><a href='/contactus' >Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-3 col-sm-12 mt-3 ps-0">
                            <h6 className="footer-heading">Contact Us</h6>
                            <ul>
                                <li className='icons-list call-icon'><a href='' >+1 234 56789</a></li>
                                <li className='icons-list email-icon'><a href='' >yourmail@mail.com </a></li>
                                <li className='icons-list address-icon'><a href='' >Your address goes here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <pre className='copyright'>
                            Copyright © 2023. All Rights Reserved.
                        </pre>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
