import Head from 'next/head'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Uxuidesign from 'component/component/ux-ui-design/Uxuidesign'
import Uxuidetails from 'component/component/ux-ui-design/Uxuidetails'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
import FindoneCall from 'component/component/APICall';
import Webcustomization from 'component/component/webdevelopment/Webcustomization'
import Buildingsolutions from 'component/component/webdevelopment/Buildingsolutions'
import Technologie from 'component/component/webdevelopment/Technologie'

function Uxuidesignpage() {
    const router = useRouter()
    const { id } = router.query

    const [loading, setloading] = useState(true)


    const [Servicedata, setServicedata] = useState({
        servicename: "Loading....",
        slug: "Loading...."
    });
                

    const fetchData = async () => {
        const response = await FindoneCall(`service/${id}`);
        const res = response.json
        const jsonResponse = await response.data.service;
        if (jsonResponse) {
            setServicedata(jsonResponse);
            setloading(false)
        }
        console.log(jsonResponse);
    };

    useEffect(() => {
        id && fetchData();
    }, [id]);

    return (
        <>

            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/services' className='pagination-link'>Services</Link>
                        <PaginationArrow />
                        <a href='' >{Servicedata.slug}</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2'>{Servicedata.servicename}</h1>
                </div>
            </header>
            <Uxuidesign servicename={Servicedata.servicename} />
            {Servicedata.servicename === 'Product Development' && <Webcustomization />}
            {Servicedata.servicename === 'Product Development' && <Buildingsolutions />}
            {Servicedata.servicename === 'Product Development' && <Technologie />}
            <Testimonial />
            <Footer />
        </>

    )
}
export default Uxuidesignpage;