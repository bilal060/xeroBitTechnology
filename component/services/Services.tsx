import React from 'react'
import Image from 'next/image'
import arrow from "../../assets/images/arrow.svg"
import AnimatedButton from '../Animated-btn'
import Digital from 'component/assets/images/digital'
import Ux from 'component/assets/images/ux'
import ProductDesign from 'component/assets/images/product'
import ContentStrategy from 'component/assets/images/content'
import DesignConcept from 'component/assets/images/design'
import SocialMedia from 'component/assets/images/social'

const Services = () => {
    return (
        <>
            <section className="container services pb-5 mt-5 font-family-primary">
                <h6 className='section-first-heading text-center pt-2 pb-2'>Our Services</h6>
                <h2 className='section-sub-heading text-center text-capital pb-4'>Revolutionize Your Digital Landscape With Our Expertise </h2>
                <p className='font-16 font-weight-400 text-dark-gray text-center pb-4'>We offer a range of services to meet your business needs, including:</p>

                <div className="row spacing_page gy-5">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <Digital />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>Digital Strategy</h3>
                            <p className='font-16 font-weight-400 opacity-06'>We can work with you to create a comprehensive digital strategy that aligns with your business goals and maximizes ROI.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <Ux />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>UX Design</h3>
                            <p className='font-16 font-weight-400 opacity-06'>Our talented designers can create engaging user experiences and intuitive interfaces that bring your digital products to life.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <ProductDesign />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>Product Design</h3>
                            <p className='font-16 font-weight-400 opacity-06'>Our experienced team of developers can help turn your product idea into a reality, from concept to launch.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <ContentStrategy />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>Content Strategy</h3>
                            <p className='font-16 font-weight-400 opacity-06'>We specialize in creating effective content strategies that help you connect with your audience and grow your brand.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <DesignConcept />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>Design & Concept</h3>
                            <p className='font-16 font-weight-400 opacity-06'>We offer professional and modern web design services that are tailored to your business needs, with a focus on user experience.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <SocialMedia />
                            <h3 className='font-24 font-weight-700 text-dark-gray'>Social Media</h3>
                            <p className='font-16 font-weight-400 opacity-06'>Let us handle your social media presence, from strategy to execution, so you can focus on running your business.</p>
                            <a href='' className="d-flex justify-content-end">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pt-4 pb-4'>
                    <AnimatedButton hrefto="services" light={true} text='Learn More' />
                </div>
            </section>
        </>
    )
}

export default Services
