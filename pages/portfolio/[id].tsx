import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Footer from 'component/component/Footer'
import Projectsections from './Projectsections'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import FindoneCall from 'component/component/APICall';

export default function Servicespage() {


    const router = useRouter()
    const { _id } = router.query

    const [loading, setloading] = useState(true)


    const [Projectdata, setProjectdata] = useState({
        projectTitle: "Loading....",
        description: "Loading",
        projectImage: "Loading...."
    });


    const fetchData = async () => {
        const response = await FindoneCall(`project/${_id}`);
        const res = response.json
        const jsonResponse = await response.data;
        if (jsonResponse) {
            setProjectdata(jsonResponse);
            setloading(false)
        }
        console.log(jsonResponse);
    };

    useEffect(() => {
        _id && fetchData();
    }, [_id]);


    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-8 d-flex align-items-center'>
                                    <div className='w-50'>
                                        <h1 className='font-24 font-weight-700 mb-3'>{Projectdata.projectTitle}</h1>
                                        <p className='font-16 font-weight-400' dangerouslySetInnerHTML={{
                                            __html: (Projectdata.description)
                                        }}
                                            style={{
                                                textAlign: "justify",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                lineHeight: "20px",
                                            }}>
                                        </p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    {/* <WebSlider /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Projectsections />
            <Footer />
        </>
    )
}