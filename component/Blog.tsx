/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import CallAPI from "./APICall";
import Image from 'next/image'
import AnimatedButton from './Animated-btn'
import Ux from 'component/assets/images/ux'
import BlogArrow from 'component/assets/images/blogArrow'

const Blog = () => {
    const [arrayData, setArrayData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await CallAPI("blog");
            const jsonResponse = await response.data;
            if (jsonResponse) {
                setArrayData(jsonResponse?.blogs);
            }
        };
        fetchData();
    }, []);

    const shortenDescription = (description) => {
        const words = description.split(" ");
        if (words.length > 35) {
            return words.slice(0, 35).join(" ") + "...";
        } else {
            return description;
        }
    };



    return (
        <>
            <section className='blogs pt-5 pb-5'>
                <div className='container'>
                    <h6 className='section-first-heading text-center'>Blogs</h6>
                    <h2 className='section-sub-heading text-dark-gray text-capital text-center pt-2'>read our latest blogs</h2>
                    <p className='font-16 font-weight-400 text-dark-gray text-center pt-4 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br />  leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row blog-cards pt-5'>
                        {arrayData.slice(0, 3).map((val, index) => {
                            if (val._id) {
                                return (
                                    <div key={index} className='col-md-6 col-lg-4 mb-4 blog-inner text-black'>
                                        {/* <Image src={blogimage1} alt="blog1" className='blogimg mt-2 mb-lg-4 mb-3 mx-auto d-block' /> */}
                                        {val.blogImage && val.blogImage.includes(`src\\`) ? (
                                            <img
                                                src={`${process.env.API_URL || "http://localhost:3500"
                                                    }/${val.blogImage}`}
                                                alt="Blog Image"
                                                className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                                            />
                                        ) : (
                                            <img
                                                src={`${val.blogImage}`}
                                                alt="Blog Image"
                                                className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                                            />
                                        )}
                                        <h4 className='pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification'>{val.blogTitle}</h4>
                                        <p className='text_center_justification font-16 font-weight-400  mb-3'
                                            dangerouslySetInnerHTML={{ __html: shortenDescription(val.description) }}
                                            style={{
                                                textAlign: "justify",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                lineHeight: "20px",
                                            }}
                                        ></p>
                                        <a href={`blog/${val._id}`} className=' d-flex gap-6px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start'><span className='pb-1'>Read Blog</span>
                                            <BlogArrow />
                                        </a>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className='d-flex justify-content-center pt-4 pb-4'>
                        <a href="/blog">
                            <AnimatedButton hrefto="blog" light={true} text='View All' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Blog
