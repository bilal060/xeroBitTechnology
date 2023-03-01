import React from 'react'
import Image from 'next/image'
import blogimage1 from "../assets/images/blog1.png"
import blogimage2 from "../assets/images/blog2.png"
import blogimage3 from "../assets/images/blog3.png"
const Blog = () => {
    return (
        <>
            <section className='blogs'>
                <div className='container'>
                    <h5>Blogs</h5>
                    <h3>read our latest blogs</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row blog-cards pt-5'>
                        <div className='co-sm-12 col-md-4 col-lg-4 blog-inner'>
                            <Image src={blogimage1} alt="image-blog1" className='blogimg mb-3 mx-auto d-block' />
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href=''>Read Blog</a>
                        </div>
                        <div className='co-sm-12 col-md-4 col-lg-4 blog-inner'>
                            <Image src={blogimage2} alt="image-blog1" className='blogimg mb-3 mx-auto d-block' />
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href=''>Read Blog</a>
                        </div>
                        <div className='co-sm-12 col-md-4 col-lg-4 blog-inner'>
                            <Image src={blogimage3} alt="image-blog1" className='blogimg mb-3 mx-auto d-block' />
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <a href=''>Read Blog</a>
                        </div>
                    </div>
                    <div className='blog-btn mt-5 pt-2 mb-2'>
                        <button type="button" className="btn_custome">View All</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
