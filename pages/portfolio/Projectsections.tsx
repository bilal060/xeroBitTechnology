/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FindoneCall from 'component/component/APICall';
import projectDetail from 'component/assets/images/projectDetail1.svg';

const Projectsections = () => {
    const router = useRouter()
    const { id } = router.query
    const [loading, setloading] = useState(true)
    const [projectData, setProjectData] = useState([{
        projectTitle: 'Loading....',
        description: 'Loading',
        projectImage: 'Loading....'
    }]);
    const fetchData = async () => {
        const response = await FindoneCall(`project/${id}`);
        const res = response.json;
        const jsonResponse = response.data && response.data.project && response.data.project.ProjectSections;

        if (jsonResponse) {
            setProjectData(jsonResponse);
            setloading(false);
        }
    };

    useEffect(() => {
        id && fetchData();
    }, [id]);
    return (
        <>
            {/* <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0 '>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='ms-3 ps-4'>
                                <div className='mb-32px'>
                                    <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                    <p className='font-14 font-weight-400 text-dark-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                                    </p>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-6 px-0 '>
                                        <div className='me-3 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-6 px-0'>
                                        <div className='ms-2 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mx-0 mb-32px'>
                                    <div className='col-6 px-0 '>
                                        <div className='me-3 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className='col-6 px-0'>
                                        <div className='ms-2 border-top pt-32px'>
                                            <p className='font-16-15 font-weight-700'>Lorem ipsum</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                            <p className='font-14 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {loading ? (
                <p>Loading...</p>
            ) : (projectData.map((section: any, i: number) => (
                <div key={i}>
                    {section.projectImagealignment === "right" ? (
                        <div className="project-details py-5 font-family-primary">
                            <div className="container py-5">
                                <div className="row m-0">
                                    <div className="col-md-6 p-0 card-main">
                                        <div className="container p-0">
                                            <p className="section-first-heading">{section.projectSectionSubTitle}</p>
                                            <p className="section-sub-heading font-36-46 mb-32px text-black text-capital">
                                                {section.projectSectionTitle}
                                            </p>
                                            <p className="font-14 font-weight-400" dangerouslySetInnerHTML={{
                                                __html: (section.projectSectionContent)
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
                                    <div className="col-md-6 p-0 card-main">
                                        <div className="container p-0">
                                            {section.projectSectionImage && section.projectSectionImage.includes(`src\\`) ? (
                                                <img
                                                    src={`${process.env.API_URL || "http://localhost:3500"
                                                        }/${section.projectSectionImage}`}
                                                    alt="protfloio Image"
                                                />
                                            ) : (
                                                <img
                                                    src={`${section.projectSectionImage}`}
                                                    alt="portfolio Image"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {section.projectImagealignment === "left" ? (
                        <div className='project-details py-5 font-family-primary'>
                            <div className='container py-5'>
                                <div className='row m-0 '>
                                    <div className='col-md-6 p-0 card-main'>
                                        <div className='container p-0'>
                                            {section.projectSectionImage && section.projectSectionImage.includes(`src\\`) ? (
                                                <img
                                                    src={`${process.env.API_URL || "http://localhost:3500"
                                                        }/${section.projectSectionImage}`}
                                                    alt="protfloio Image"
                                                />
                                            ) : (
                                                <img
                                                    src={`${section.projectSectionImage}`}
                                                    alt="portfolio Image"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-md-6 p-0 card-main'>
                                        <div className='container ms-3 ps-4'>
                                            <p className='section-first-heading '>{section.projectSectionSubTitle}</p>
                                            <p className='section-sub-heading font-36-46 mb-32px text-black text-capital'>
                                                {section.projectSectionTitle}
                                            </p>
                                            <p className='font-14 font-weight-400' dangerouslySetInnerHTML={{
                                                __html: (section.projectSectionContent)
                                            }}
                                                style={{
                                                    textAlign: "justify",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    lineHeight: "20px",
                                                }}
                                            >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : null}
                </div>
            ))
            )}
            {/* <div className='project-details py-5 font-family-primary'>
                <div className='container py-5'>
                    <div className='row m-0 '>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container p-0'>
                                <Image src={projectDetail} alt='' />
                            </div>
                        </div>
                        <div className='col-md-6 p-0 card-main'>
                            <div className='container ms-3 ps-4'>
                                <p className='section-first-heading '>Lorem ipsum</p>
                                <p className='section-sub-heading font-36-46 mb-32px text-black text-capital'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <p className='font-14 font-weight-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Projectsections;
