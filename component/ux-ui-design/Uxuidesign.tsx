/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import AnimatedButton from '../Animated-btn'
import FindoneCall from 'component/component/APICall';
import Projectidea from 'component/component/Projectidea'

const Uxuidesign = ({ servicename }) => {
    const router = useRouter()
    const { id } = router.query
    const [loading, setloading] = useState(true)
    const [Servicedata, setServicedata] = useState([{
        servicename: "Loading....",
        slug: "Loading....",
        sectionTitle: "loading",
        sectionSubTitle: "",
        sectionContent: "",
        sectionImage: ""
    }]);

    const fetchData = async () => {
        const response = await FindoneCall(`service/${id}`);
        const res = response.json;
        const jsonResponse = response.data && response.data.service && response.data.service.sections;

        if (jsonResponse) {
            setServicedata(jsonResponse);
            setloading(false);
        }
    };

    useEffect(() => {
        id && fetchData();
    }, [id]);
    return (
        <>
            {Servicedata?.map((Service: any, i) => (
                <div key={i}>
                    {Service.imagealignment === "right" ? (
                        <section className='uxui-design pt-5'>
                            <div className='container  g-0'>
                                <div className='row m-0'>
                                    <div className='col-md-6 col-lg-5 mt-5 strategy-tabs text_center_justification'>
                                        <h6 className='section-first-heading font-weight-500 font-18-17 text-xero-primary text_center_justification pt-2'>{Service.sectionSubTitle}</h6>
                                        <h3 className='section-sub-heading font-36-46 text-black pb-4'>{Service.sectionTitle}</h3>
                                        <p className='font-16 font-weight-400 text-dark-gray' dangerouslySetInnerHTML={{
                                            __html: (Service.sectionContent)
                                        }}
                                            style={{
                                                textAlign: "justify",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                lineHeight: "20px",
                                            }}
                                        ></p>
                                        <div className="btn-center">
                                            <AnimatedButton light={true} text="Get Started Today" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-7 g-0 image_right_container d-md-block d-none'>
                                        {Service.sectionImage && Service.sectionImage.includes(`src\\`) ? (
                                            <img
                                                src={`${process.env.API_URL || "http://localhost:3500"
                                                    }/${Service.sectionImage}`}
                                                alt="section Image"
                                                className="img-fluid float-end"
                                            />
                                        ) : (
                                            <img
                                                src={`${Service.sectionImage}`}
                                                alt="section Image"
                                                className="img-fluid float-end"
                                            />
                                        )}
                                    </div>
                                </div>

                            </div>
                        </section >
                    ) : null}
                    {Service.imagealignment === "left" ? (
                        <section className='uxuidetails pt-5 pb-5 position-relative'>
                            <div className='container g-0'>
                                <div className='row m-0  flex-row-reverse'>
                                    <div className='col-md-6 col-lg-6 col-sm-12 image_left_container p-0 d-md-block d-none'>

                                        {Service.sectionImage && Service.sectionImage.includes(`src\\`) ? (
                                            <img
                                                src={`${process.env.API_URL || "http://localhost:3500"
                                                    }/${Service.sectionImage}`}
                                                alt="section Image"
                                                className="img-fluid"
                                            />
                                        ) : (
                                            <img
                                                src={`${Service.sectionImage}`}
                                                alt="section Image"
                                                className="img-fluid"
                                            />
                                        )}
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-12 '>
                                        <div className='text_center_justification'>
                                            <h2 className='section-sub-heading font-36-46 text-black pb-4 m-0'>{Service.sectionTitle}</h2>
                                            <p className='font-16 font-weight-400 text-black' dangerouslySetInnerHTML={{
                                                __html: (Service.sectionContent)
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
                    ) : null}
                    {servicename === 'UX/UI Design' && i === 0 && <Projectidea light={true} />}
                </div>
            ))}
        </>
    )
}

export default Uxuidesign;
