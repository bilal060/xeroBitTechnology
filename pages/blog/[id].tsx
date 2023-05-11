/* eslint-disable @next/next/no-img-element */
import PaginationArrow from 'component/assets/images/paginationArrow'
import Navbar from 'component/component/Navbar'
import React, { useEffect, useState } from 'react'
import Footer from 'component/component/Footer'
import { useRouter } from 'next/router'
import CallAPI from 'component/component/APICall'
import Image from 'next/image'
import blogicon from "../../assets/images/blogicon.svg"
import Dateicon from 'component/assets/images/date'
import fb from "../../assets/images/fb.svg"
import twt from "../../assets/images/twt.svg"
import msg from "../../assets/images/mesg.svg"
import zip from "../../assets/images/zip.svg"
import linkI from "../../assets/images/link.svg"
import Sideblogs from './sideblogs'

function Blog() {
    const router = useRouter()
    const { id } = router.query

    const [loading, setloading] = useState(true)
    const [Blogdata, setBlogdata] = useState({
        blogCategory: "asd",
        blogImage: "",
        blogTitle: "asd",
        createdAt: 1681124032011,
        description: '',
        isDeleted: false,
        links: null,
        source: "asd"
    });

    const fetchData = async () => {
        const response = await CallAPI(`blog/${id}`);
        const res = response.json
        const jsonResponse = await response.data;
        if (jsonResponse) {
            setBlogdata(jsonResponse);
            setloading(false)
        }
    };

    useEffect(() => {
        id && fetchData();
    }, [id]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <Navbar />
            <div className='container pt-5'>
                <div className='blog-heading col-md-6 col-lg-6 mt-2 font-family-primar'>
                    <h6 className='section-first-heading font-weight-bold font-18-17 text-xero-primary text_center_justification pt-2'>{Blogdata.blogCategory}</h6>
                    <h2 className='section-sub-heading font-weight-700 font-36-46 pt-2 pb-2 text_center_justification pt-2'>{Blogdata.blogTitle}</h2>
                </div>
                <div className='row pb-4'>
                    <div className='col-md-12 col-lg-3 col-sm-12'>
                        <div className='d-flex flex-row align-items-center justify-content-lg-start justify-content-sm-center justify-content-center justify-content-md-start'>
                            <Image src={blogicon} alt="icon" />
                            <h6 className='font-weight-500 font-16-100 ps-3'>By <span className='text-xero-primary'>{Blogdata.source}</span></h6>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-3 pt-sm col-sm-12 d-flex flex-row align-items-center justify-content-lg-center justify-content-center justify-content-md-start justify-content-sm-center'>
                        <Dateicon />
                        <span className='font-weight-500 font-16-100 ps-3'>Published on {
                            ' ' + monthNames[new Date(Blogdata.createdAt).getMonth()] + ' '
                        }
                            {
                                new Date(Blogdata.createdAt).getDate()
                            },
                            {
                                ' ' + new Date(Blogdata.createdAt).getFullYear()
                            }</span>
                    </div>
                    <div className='col-md-12 col-lg-3 pt-sm col-sm-12 d-flex flex-row align-items-center justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-end'>
                        <div className='sc-icon'>
                            <a href=''>
                                <Image src={fb} alt="fb" />
                            </a>
                        </div>
                        <div className='sc-icon ps-4'>
                            <a href=''>
                                <Image src={linkI} alt="linkIn" />
                            </a>
                        </div>
                        <div className='sc-icon ps-4'>
                            <a href=''>
                                <Image src={twt} alt="twt" />
                            </a>
                        </div>
                        <div className='sc-icon ps-4'>
                            <a href=''>
                                <Image src={msg} alt="msg" />
                            </a>
                        </div>
                        <div className='sc-icon ps-4'>
                            <a href=''>
                                <Image src={zip} alt="zip" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='blog-detail col-lg-9 col-md-9'>
                        <div className='blog-detail-image'>
                            {Blogdata.blogImage && Blogdata.blogImage.includes(`src\\`) ? (
                                <img
                                    src={`${process.env.API_URL || "http://localhost:3500"
                                        }/${Blogdata.blogImage}`}
                                    alt="Blog Image"
                                    className="blogimg w-100 mb-3 mx-auto d-block w-100 h-100 rounded-4"
                                />
                            ) : (
                                <img
                                    src={`${Blogdata.blogImage}`}
                                    alt="Blog Image"
                                    className="blogimg w-100  mb-3 mx-auto d-block w-100 h-100 rounded-4"
                                />
                            )}
                        </div>
                        <p className='blog-content' dangerouslySetInnerHTML={{ __html: (Blogdata.description) }}
                            style={{
                                textAlign: "justify",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "20px",
                            }}
                        ></p>
                    </div>
                    <div className='col-md-3 col-lg-3'>
                        <Sideblogs />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog