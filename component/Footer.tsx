import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/footerlogo.png'
import fbicon from '../assets/images/facebook.svg'
import linkicon from '../assets/images/linkedin.svg'
import instaicon from '../assets/images/insta.svg'
import twicon from '../assets/images/twit.svg'
const Footer = () => {
    return (
        <>
            <footer className="text-lg-start text-white xerobit-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 col-sm-12 mx-auto mt-3">
                            <a className="navbar-brand" href="#">
                                <Image src={logo} alt="img" className='img-fluid footer-logo' />
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                            <div className="row">
                                <div className='col-2'>
                                    <a href=''><Image src={fbicon} alt="icons" className='fb-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={linkicon} alt="icons" className='lin-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={instaicon} alt="icons" className='insta-icon' /></a>
                                </div>
                                <div className='col-2'>
                                    <a href=''><Image src={twicon} alt="icons" className='tw-icon' /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 mx-auto mt-3">
                            <h6 className="footer-heading">Services</h6>
                            <ul>
                                <li><a href='' >Digital Strategy</a></li>
                                <li><a href='' >UX Design</a></li>
                                <li><a href='' >Product Design</a></li>
                                <li><a href='' >Content Strategy</a></li>
                                <li><a href='' >Design & Concept</a></li>
                                <li><a href='' >Social Media</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-12 mx-auto mt-3">
                            <h6 className="footer-heading">Quick Links</h6>
                            <ul>
                                <li><a href='' >Services</a></li>
                                <li><a href='' >About Us</a></li>
                                <li><a href='' >Testimonials</a></li>
                                <li><a href='' >Blog</a></li>
                                <li><a href='' >Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 mx-auto mt-3">
                            <h6 className="footer-heading">Contact Us</h6>
                            <ul>
                                <li className='icons-list call-icon'><a href='' >+1 234 56789</a></li>
                                <li className='icons-list email-icon'><a href='' >yourmail@mail.com </a></li>
                                <li className='icons-list address-icon'><a href='' >Your address goes here</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='mx-auto' />
                    <div className="col-12">
                        <pre>
                            Copyright © 2023. All Rights Reserved.
                        </pre>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
