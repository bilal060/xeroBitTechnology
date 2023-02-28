import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/footerlogo.png'
const Footer = () => {
    return (
        <>
            <div className='xerobit-footer' style={{ backgroundColor: '#000000' }}>
                <div className="container my-5">
                    <footer className="text-center text-lg-start text-white">
                        <div className="container p-4 pb-0">
                            <div className="row">

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <a className="navbar-brand" href="#">
                                        <Image src={logo} alt="img" />
                                    </a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                    <p>
                                        <a className="text-white" href=''>Digital Strategy</a>
                                    </p>
                                    <p>
                                        <a className="text-white">UX Design Product</a>
                                    </p>
                                    <p>
                                        <a className="text-white">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Bootstrapr</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Quick Links
                                    </h6>
                                    <p>
                                        <a className="text-white">Services</a>
                                    </p>
                                    <p>
                                        <a className="text-white">About Us</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Testimonials </a>
                                    </p>
                                    <p>
                                        <a className="text-white">Help</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                                    <p><i className="fas fa-home mr-3" />Your address goes here</p>
                                    <p><i className="fas fa-envelope mr-3" />yourmail@mail.com</p>
                                    <p><i className="fas fa-phone mr-3" />+1 234 56789</p>
                                    <p><i className="fas fa-print mr-3" />+1 234 56789</p>
                                </div>

                            </div>
                            <hr className="my-3" />
                            <section className="p-3 pt-0">
                                <div className="row d-flex align-items-center">

                                    <div className="col-md-7 col-lg-8 text-center text-md-start">

                                        <div className="p-3">
                                            © 2020 Copyright:
                                            <a className="text-white" href="https://mdbootstrap.com/"></a>
                                        </div>

                                    </div>

                                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>

                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>

                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>

                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
