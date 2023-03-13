import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Footer from 'component/component/Footer'
import WebSlider from 'component/assets/images/webslider'
import projectDetail from 'component/assets/images/projectDetail1.svg'

import Image from 'next/image'

export default function Servicespage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-8 d-flex align-items-center'>
                                    <div className='w-50'>
                                        <h1 className='font-24 font-weight-700 mb-3'>Project Name</h1>
                                        <p className='font-16 font-weight-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <WebSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0 '>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='ms-3 ps-4'>
                                <div className='mb-32px'>
                                    <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                    <p className='font-14 font-weight-400 text-dark-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                                    </p>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-6 px-0 '>
                                        <div className='me-3 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-6 px-0'>
                                        <div className='ms-2 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-6 px-0 '>
                                        <div className='me-3 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-6 px-0'>
                                        <div className='ms-2 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 mb-32px text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <p className='font-14 font-weight-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <Image src={projectDetail} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0 '>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <Image src={projectDetail} alt='' />
                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container ms-3 ps-4'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 mb-32px text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <p className='font-14 font-weight-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 mb-32px text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <p className='font-14 font-weight-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <Image src={projectDetail} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}