/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import blogimage from "../../assets/images/blog1.png"
import profileimage from "../../assets/images/profileimage.svg"
import profilefb from "../../assets/images/profile-fb.svg"
import profiletwt from "../../assets/images/prfile-twt.svg"
import profilemlinkI from "../../assets/images/profile-linkI.svg"
import profileinsta from "../../assets/images/profile-insta.svg"
import CallAPI from "../../component/APICall";
const Sideblogs = () => {

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
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    return (
        <>

            <div className='profile-card align-items-center justify-content-center'>
                <Image src={profileimage} alt='profileimage' className='profile-image pt-4' />
                <h4 className='profile-name pt-3 pb-2'>Xero Bit Admin</h4>
                <h6 className='profile-about pb-4'>Software Development influencer</h6>
                <p className='profile-detail pb-4'>To add your article, send us an email
                    to <a href='' className='link'>info@xerobittechnology.com</a></p>
                <div className='profile-icons d-flex flex-row align-items-center justify-content-center pb-4'>
                    <div className='sc-icon'>
                        <a href=''>
                            <Image src={profilefb} alt="fb" />
                        </a>
                    </div>
                    <div className='sc-icon ps-2'>
                        <a href=''>
                            <Image src={profiletwt} alt="twt" />
                        </a>
                    </div>
                    <div className='sc-icon ps-2'>
                        <a href=''>
                            <Image src={profilemlinkI} alt="linkI" />
                        </a>
                    </div>
                    <div className='sc-icon ps-2'>
                        <a href=''>
                            <Image src={profileinsta} alt="insta" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className='hr' />
            <h2 className='blog-papular-heading pb-4 pt-2'>Papular Topics</h2>
            {arrayData.slice(0, 3).map((val, index) => {
                if (val._id) {
                    return (

                        <div key={index} className='blogs-papular'>
                            {val.blogImage && val.blogImage.includes(`src\\`) ? (
                                <img
                                    src={`${process.env.API_URL || "http://localhost:3500"
                                        }/${val.blogImage}`}
                                    alt="Blog Image"
                                    className="blog-papular-images w-100 h-100 rounded-3"
                                />
                            ) : (
                                <img
                                    src={`${val.blogImage}`}
                                    alt="Blog Image"
                                    className="blog-papular-images w-100 h-100 rounded-3"
                                />
                            )}
                            <h3 className='blog-papular-title pt-2 pb-2'>{val.blogTitle}</h3>
                            <p className='blog-papular-details' dangerouslySetInnerHTML={{ __html: shortenDescription(val.description) }}
                                style={{
                                    textAlign: "justify",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                }}
                            ></p>
                            <div className='papular-blogs-details d-flex flex-row align-items-center'>
                                <div className='d-flex justify-content-start col-6'>
                                    <p className='profile-contet'>By <span className='profile-color-text'>{val.source}</span></p>
                                </div>
                                <div className='d-flex justify-content-end col-6'>
                                    <p className='profile-date'>
                                        {
                                            ' ' + monthNames[new Date(val.createdAt).getMonth()] + ' '
                                        }
                                        {
                                            new Date(val.createdAt).getDate()
                                        },
                                        {
                                            ' ' + new Date(val.createdAt).getFullYear()
                                        }

                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}

        </>
    )
}

export default Sideblogs
