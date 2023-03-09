import React from 'react'
import Image from 'next/image'
import blogimage1 from "../assets/images/blog1.png"
import blogimage2 from "../assets/images/blog2.png"
import blogimage3 from "../assets/images/blog3.png"
import AnimatedButton from './Animated-btn'
const Blog = () => {
    return (
        <>
            <section className='blogs pt-5 pb-5'>
                <div className='container'>
                    <h6 className='font-weight-500 text-center'>Blogs</h6>
                    <h2 className='font-weight-700 text-center pt-2'>read our latest blogs</h2>
                    <p className='font-16 text-center pt-4 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br />  leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row blog-cards pt-5'>
                        <div className='col-md-6 col-lg-4 mb-4 blog-inner'>
                            <Image src={blogimage1} alt="image-blog1" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className=''>Read Blog</a>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 blog-inner'>
                            <Image src={blogimage2} alt="image-blog1" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className=''>Read Blog</a>
                        </div>
                        <div className='col-md-6 col-lg-4 blog-inner'>
                            <Image src={blogimage3} alt="image-blog1" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' />
                            <h4 className='pb-lg-4 pb-3 m-0 text_center_justification'>Lorem ipsum dolor sit amet</h4>
                            <p className='text_center_justification mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href='' className=''>Read Blog</a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pt-4 pb-4'>
                        <AnimatedButton text='View All' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
