/* eslint-disable @next/next/no-img-element */
import PaginationArrow from 'component/assets/images/paginationArrow'
import Navbar from 'component/component/Navbar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ExploreTopics from './exploreTopics'
import BlogContent from 'component/component/Blog/Blogs'
import Footer from 'component/component/Footer'
import { useRouter } from 'next/router'
import axios from 'axios'
import CallAPI from 'component/component/APICall'

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

            <div className='blog-detail'>
                <p className="blog-type">{Blogdata.blogCategory}</p>
                {Blogdata.blogImage && Blogdata.blogImage.includes(`src\\`) ? (
                    <img
                        src={`${process.env.API_URL || "http://localhost:3500"
                            }/${Blogdata.blogImage}`}
                        alt="Blog Image"
                        className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                    />
                ) : (
                    <img
                        src={`${Blogdata.blogImage}`}
                        alt="Blog Image"
                        className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                    />
                )}
                <h2>{Blogdata.blogTitle}</h2>
                <p
                    className="text_center_justification font-16 font-weight-400 mb-3"
                    dangerouslySetInnerHTML={{ __html: (Blogdata.description) }}
                    style={{
                        textAlign: "justify",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "20px",
                    }}
                ></p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <div className="source-logo"></div>
                        <p>By
                            {' ' + Blogdata.source}
                        </p>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={24} viewBox="0 0 22 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.60098 0C7.20849 0 7.70098 0.488417 7.70098 1.09091V4.36364C7.70098 4.96613 7.20849 5.45455 6.60098 5.45455C5.99346 5.45455 5.50098 4.96613 5.50098 4.36364V1.09091C5.50098 0.488417 5.99346 0 6.60098 0Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.3998 0C16.0073 0 16.4998 0.488417 16.4998 1.09091V4.36364C16.4998 4.96613 16.0073 5.45455 15.3998 5.45455C14.7923 5.45455 14.2998 4.96613 14.2998 4.36364V1.09091C14.2998 0.488417 14.7923 0 15.3998 0Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.549805 8.82553C0.549805 8.22304 1.04229 7.73462 1.6498 7.73462H20.3498C20.9573 7.73462 21.4498 8.22304 21.4498 8.82553C21.4498 9.42802 20.9573 9.91644 20.3498 9.91644H1.6498C1.04229 9.91644 0.549805 9.42802 0.549805 8.82553Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.21232 4.96945C2.5705 5.65493 2.2 6.71255 2.2 8.18169V17.4544C2.2 18.9235 2.5705 19.9812 3.21232 20.6666C3.84044 21.3375 4.88466 21.818 6.6 21.818H15.4C17.1153 21.818 18.1596 21.3375 18.7877 20.6666C19.4295 19.9812 19.8 18.9235 19.8 17.4544V8.18169C19.8 6.71255 19.4295 5.65493 18.7877 4.96945C18.1596 4.29861 17.1153 3.81805 15.4 3.81805H6.6C4.88466 3.81805 3.84044 4.29861 3.21232 4.96945ZM1.60018 3.48483C2.75956 2.24658 4.46534 1.63623 6.6 1.63623H15.4C17.5347 1.63623 19.2404 2.24658 20.3998 3.48483C21.5455 4.70844 22 6.37809 22 8.18169V17.4544C22 19.258 21.5455 20.9277 20.3998 22.1513C19.2404 23.3895 17.5347 23.9999 15.4 23.9999H6.6C4.46534 23.9999 2.75956 23.3895 1.60018 22.1513C0.454496 20.9277 0 19.258 0 17.4544V8.18169C0 6.37809 0.454496 4.70844 1.60018 3.48483Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.89551 13.8543C9.89551 13.2518 10.388 12.7634 10.9955 12.7634H11.0054C11.6129 12.7634 12.1054 13.2518 12.1054 13.8543C12.1054 14.4568 11.6129 14.9452 11.0054 14.9452H10.9955C10.388 14.9452 9.89551 14.4568 9.89551 13.8543Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.82227 13.8543C5.82227 13.2518 6.31475 12.7634 6.92227 12.7634H6.93215C7.53966 12.7634 8.03215 13.2518 8.03215 13.8543C8.03215 14.4568 7.53966 14.9452 6.93215 14.9452H6.92227C6.31475 14.9452 5.82227 14.4568 5.82227 13.8543Z" fill="#5390A5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.82227 17.1273C5.82227 16.5248 6.31475 16.0364 6.92227 16.0364H6.93215C7.53966 16.0364 8.03215 16.5248 8.03215 17.1273C8.03215 17.7298 7.53966 18.2182 6.93215 18.2182H6.92227C6.31475 18.2182 5.82227 17.7298 5.82227 17.1273Z" fill="#5390A5" />
                        </svg>
                        <p className='m-0'> published on

                            {
                                ' ' + monthNames[new Date(Blogdata.createdAt).getMonth()] + ' '
                            }
                            {
                                new Date(Blogdata.createdAt).getDate()
                            },
                            {
                                ' ' + new Date(Blogdata.createdAt).getFullYear()
                            }
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div >

            <Footer />
        </>
    )
}

export default Blog