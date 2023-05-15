/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import uxuidetails from "../../assets/images/uxuidetails.png"
import AnimatedButton from '../Animated-btn'
import FindoneCall from 'component/component/APICall';

const Uxuidetails = () => {

    const router = useRouter()
    const { id } = router.query
    const [loading, setloading] = useState(true)

    const [Servicedata, setServicedata] = useState({
        servicename: "Loading....",
        slug: "Loading....",
        sectionTitle: "loading",
        sectionSubTitle: "",
        sectionContent: "",
        sectionImage: ""
    });


    const fetchData = async () => {
        const response = await FindoneCall(`service/${id}`);
        const res = response.json
        const jsonResponse = await response.data.service.sections[1];
        if (jsonResponse) {
            setServicedata(jsonResponse);
            setloading(false)
        }
        //  console.log(jsonResponse);
    };

    useEffect(() => {
        id && fetchData();
    }, [id]);

    return (
        <>
            <section className='uxuidetails pt-5 pb-5 position-relative'>
                <div className='container g-0'>
                    <div className='row m-0  flex-row-reverse'>
                        <div className='col-md-6 col-lg-6 col-sm-12 image_left_container p-0 d-md-block d-none'>

                            {Servicedata.sectionImage && Servicedata.sectionImage.includes(`src\\`) ? (
                                <img
                                    src={`${process.env.API_URL || "http://localhost:3500"
                                        }/${Servicedata.sectionImage}`}
                                    alt="section Image"
                                    className="img-fluid"
                                />
                            ) : (
                                <img
                                    src={`${Servicedata.sectionImage}`}
                                    alt="section Image"
                                    className="img-fluid"
                                />
                            )}
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 '>
                            <div className='text_center_justification'>
                                <h2 className='section-sub-heading font-36-46 text-black pb-4 m-0'>{Servicedata.sectionTitle}</h2>
                                <p className='font-16 font-weight-400 text-black' dangerouslySetInnerHTML={{
                                    __html: (Servicedata.sectionContent)
                                }}
                                    style={{
                                        textAlign: "justify",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "20px",
                                    }}></p>
                                <div className="btn-center">
                                    <AnimatedButton light={true} text='Get Started Today' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uxuidetails
