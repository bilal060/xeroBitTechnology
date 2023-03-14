import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Footer from 'component/component/Footer'
import WebSlider from 'component/assets/images/webslider'
import projectDetail from 'component/assets/images/projectDetail1.svg'

import Image from 'next/image'

export default function Servicespage() {
    return (
        <div className='projectDetails-main'>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-8 col-lg-6 col-md-5 d-flex align-items-center px-0'>
                                    <div className='project-details-1 text_center_justification'>
                                        <h1 className='font-24 font-weight-700 mb-3'>Project Name</h1>
                                        <p className='font-16 font-weight-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-7 d-md-flex d-none'>
                                    <div className='w-100 d-flex justify-content-end'>
                                        <WebSlider />
                                    </div>
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
                            <div className='container p-0 text_center_justification'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='ms-md-3 ps-md-4'>
                                <div className='mb-32px text_center_justification'>
                                    <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                    <p className='font-14 font-weight-400 text-dark-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                                    </p>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-lg-6 px-0 '>
                                        <div className='me-3 border-top pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 px-0'>
                                        <div className='ms-lg-2 border-top pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-lg-6 px-0 '>
                                        <div className='me-3 border-top pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 px-0'>
                                        <div className='ms-lg-2 border-top pt-32px text_center_justification'>
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
                <div className='container pt-5'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0 text_center_justification'>
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
                <div className='container pt-5'>
                    <div className='row m-0 '>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <Image src={projectDetail} alt='' className='greyScale' />
                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container ms-md-3 ps-md-4 text_center_justification'>
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
                <div className='container pt-5'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0 text_center_justification'>
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
                        <div className='col-md-6 p-0 card-main '>
                            <div className='container p-0 text_center_justification'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='ms-md-3 ps-md-4'>
                                <div className='mb-32px text_center_justification'>
                                    <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                    <p className='font-14 font-weight-400 text-dark-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.                                    </p>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-12 px-0 text_center_justification'>
                                        <p className='font-16-15 font-weight-700 mb-32px'>Tech Stack</p>
                                    </div>
                                    <div className='col-xl-3 col-md-6 mb-xl-0 mb-4 px-0 border-top d-flex justify-content-md-start justify-content-center'>
                                        <div className='me-3 pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Web</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>HTML-SCSS</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>NextJS</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>BootstrapJQuery</p>
                                            <p className='font-14 font-weight-400 text-dark-gray m-md-0'>JQuery</p>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-md-6 px-0 border-top d-flex justify-content-xl-end justify-content-md-start justify-content-center'>
                                        <div className='me-3 pt-32px  text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Backend</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Swift (iOS)</p>
                                            <p className='font-14 font-weight-400 text-dark-gray m-md-0'>Kotlin (Android)</p>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-md-6 px-0 border-top d-flex justify-content-xl-end justify-content-md-start justify-content-center'>
                                        <div className='me-3 pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Mobile</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>NodeJS</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>ExpressJS</p>
                                            <p className='font-14 font-weight-400 text-dark-gray m-md-0'>MongoDB</p>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-md-6 px-0 border-top d-flex justify-content-xl-end justify-content-md-start justify-content-center'>
                                        <div className='me-3 pt-32px text_center_justification'>
                                            <p className='font-16-15 font-weight-700'>Other</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Jenkins</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>AWS</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Docker</p>
                                            <p className='font-14 font-weight-400 text-dark-gray m-md-0'>Sonar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-xl-6 px-0 '>
                                        <div className='border-top pt-32px text_center_justification'>
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
            <Footer />
        </div>
    )
}