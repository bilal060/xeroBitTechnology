import React from 'react'
import Image from 'next/image'
import arrow from "../../assets/images/arrow.svg"
// import digitallogo from "../../assets/images/digital.svg"
import uxdesignlogo from "../../assets/images/ux.svg"
import productdesignlogo from "../../assets/images/product.svg"
import contentlogo from "../../assets/images/content.svg"
import designconceptlogo from "../../assets/images/design.svg"
import socialmedialogo from "../../assets/images/social.svg"
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
            <section className="container services pb-5 mt-5">

                <h6 className='font-weight-500 text-center pt-2 pb-2'>Our Services</h6>
                <h2 className='font-weight-700 text-center pb-4'>What we offer</h2>
                <p className='font-16 text-center pt-3 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan
                    <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>

                <div className="row spacing_page gy-5">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <Digital />
                            <h3>Digital Strategy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <Ux />
                            <h3>UX Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <ProductDesign />
                            <h3>Product Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <ContentStrategy />
                            <h3>Content Strategy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <DesignConcept />
                            <h3>Design & Concept</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="services-cards">
                            <SocialMedia />
                            <h3>Social Media</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className="mx-auto">
                                <Image src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pt-4 pb-4'>
                    <AnimatedButton text='Learn More' />
                </div>
            </section>
        </>
    )
}

export default Services
