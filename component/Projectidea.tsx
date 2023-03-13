import React from 'react'
import Image from 'next/image'
import leftimage from '../assets/images/left-image-bg.svg'
import rightimage from '../assets/images/right-imgage-bg.svg'
import AnimatedButton from './Animated-btn'
const Projectidea = (props: any) => {
    return (
        <>
            <section className="project-plan ">
                <Image src={leftimage} alt="left-image" className='img-fluid left-image' />
                <div className="container project-idea">
                    <h3 className='font-48 font-weight-700 text-white text-center text-capital mb-32px'>Our Portfolio of Success Stories</h3>
                    <div className='project-plan-desc'>
                        <p className='font-16 font-weight text-white text-center font-weight-400 opacity-06'>
                            At Xero Bit Technology, we pride ourselves on delivering exceptional results for our clients. Over the years, we have worked with businesses of all sizes, across various industries, and helped them achieve their digital goals. Our portfolio of success stories includes numerous satisfied clients who have benefited from our expertise in digital strategy, UX design, product design, content strategy, website design, and social media management.
                        </p>
                        <p className='font-16 font-weight text-white text-center font-weight-400 opacity-06'>
                            Whether you need to increase your online presence, improve customer engagement, or drive conversions, we have the skills and experience to deliver the results you need. Our proven track record of success speaks for itself, and we are committed to delivering the same level of excellence to every client we work with. Explore our portfolio of success stories to see how we can help you achieve your digital goals.
                        </p>
                    </div>
                    <AnimatedButton hrefto="portfolio" light={props.light} text='Lets Discuss' />
                </div>
                <Image src={rightimage} alt="right-image" className='img-fluid right-image' />
            </section>
        </>
    )
}

export default Projectidea
