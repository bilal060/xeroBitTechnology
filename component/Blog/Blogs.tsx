import React from 'react'
import Image from 'next/image'
import blogimage1 from "component/assets/images/blog1.png"
import blogimage2 from "component/assets/images/blog2.png"
import blogimage3 from "component/assets/images/blog3.png"
import BlogArrow from 'component/assets/images/blogArrow'

const blogData = [
    {
        id: 1,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage1,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 2,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage2,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 3,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage3,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 4,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage1,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 5,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage2,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 6,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage3,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 7,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage1,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 8,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage2,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 9,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage3,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 10,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage1,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 11,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage2,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
    {
        id: 12,
        blogName: 'Lorem ipsum dolor sit amet',
        image: blogimage3,
        blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.'
    },
]
const BlogContent = () => {
    return (
        <>
            <section className='blogContents mt-2 pt-4 pb-5'>
                <div className='container'>
                    <h3 className='font-weight-700 font-24 mb-32px'>
                        Recent Blogs
                    </h3>
                    <div className='row blog-cards'>
                        {blogData.map((data, index) => {
                            return (
                                <div key={index} className='col-md-6 col-lg-4 mb-5 blog-inner text-black'>
                                    <Image src={data.image} alt="blog1" className='blogimg w-100 mt-2  mb-3 mx-auto d-block' />
                                    <h4 className='pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification'>{data.blogName}</h4>
                                    <p className='text_center_justification font-16 font-weight-400 mb-3'>{data.blogDesc}</p>
                                    <a href='/blog' className=' d-flex gap-11px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start'><span className='pb-1'>Read Blog</span>
                                        <BlogArrow />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogContent
