/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import AnimatedButton from '../Animated-btn'
import FindoneCall from 'component/component/APICall';




const Uxuidesign = () => {

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
        const res = response.json
        const jsonResponse = await response.data.service.sections;
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


            <section className='uxui-design pt-5'>
                <div className='container  g-0'>
                    {Servicedata?.map((service: any, i) => <><div key={i} className='row m-0'>
                        <div className='col-md-6 col-lg-5 mt-5 strategy-tabs text_center_justification'>
                            <h6 className='section-first-heading font-weight-500 font-18-17 text-xero-primary text_center_justification pt-2'>{Servicedata.sectionSubTitle}</h6>
                            <h3 className='section-sub-heading font-36-46 text-black pb-4'>{service.sectionTitle}</h3>
                            <p className='font-16 font-weight-400 text-dark-gray' dangerouslySetInnerHTML={{
                                __html: (service.sectionContent)
                            }}
                                style={{
                                    textAlign: "justify",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                }}
                            ></p>
                            {/* <ul className='about-items'>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                            </ul> */}
                            <div className="btn-center">
                                <AnimatedButton light={true} text="Get Started Today" />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 g-0 image_right_container d-md-block d-none'>
                            {service.sectionImage && service.sectionImage.includes(`src\\`) ? (
                                <img
                                    src={`${process.env.API_URL || "http://localhost:3500"
                                        }/${service.sectionImage}`}
                                    alt="section Image"
                                    className="img-fluid float-end"
                                />
                            ) : (
                                <img
                                    src={`${service.sectionImage}`}
                                    alt="section Image"
                                    className="img-fluid float-end"
                                />
                            )}
                        </div>
                    </div>
                        {i == 0 && <h1>hello world</h1>}
                    </>)}

                </div>
            </section >
        </>
    )
}

export default Uxuidesign
