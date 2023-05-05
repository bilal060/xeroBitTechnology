import React from 'react'
import Image from 'next/image'
import blogimage1 from "../assets/images/blog1.png"
import blogimage2 from "../assets/images/blog2.png"
import blogimage3 from "../assets/images/blog3.png"
import AnimatedButton from './Animated-btn'
import Ux from 'component/assets/images/ux'
import BlogArrow from 'component/assets/images/blogArrow'

const Blog = () => {
    return (
        <>
            <section className='blogs pt-5 pb-5'>
                <div className='container'>
                    <h6 className='section-first-heading text-center'>Blogs</h6>
                    <h2 className='section-sub-heading text-dark-gray text-capital text-center pt-2'>read our latest blogs</h2>
                    <p className='font-16 font-weight-400 text-dark-gray text-center pt-4 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br />  leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row blog-cards pt-5'>
                        <div className='col-md-6 col-lg-4 mb-4 blog-inner text-black'>
                            <Image src={blogimage1} alt="blog1" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification font-16 font-weight-400  mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='/blog' className=' d-flex gap-6px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start'><span className='pb-1'>Read Blog</span>
                                <BlogArrow />
                            </a>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 blog-inner'>
                            <Image src={blogimage2} alt="blog2" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification font-16 font-weight-400  mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='/blog' className=' d-flex gap-6px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start'><span className='pb-1'>Read Blog</span>
                                <BlogArrow />   
                            </a>
                        </div>     
                        <div className='col-md-6 col-lg-4 blog-inner'>
                            <Image src={blogimage3} alt="blog3" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification font-16 font-weight-400  mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='/blog' className=' d-flex gap-6px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start'><span className='pb-1'>Read Blog</span>
                                <BlogArrow />
                            </a>    
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pt-4 pb-4'>
                        <AnimatedButton hrefto="blog" light={true} text='View All' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
