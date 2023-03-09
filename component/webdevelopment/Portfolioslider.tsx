import BlogArrow from 'component/assets/images/blogArrow';
import WebSlider from 'component/assets/images/webslider';
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import WebDevelopmentCard from './Card';

const feedBack = [
    {
        id: 1,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />
    },
    {
        id: 2,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />
    },
    {
        id: 3,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />
    },
    {
        id: 4,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />

    },
    {
        id: 5,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />
    },
    {
        id: 6,
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
        name: 'Project Name',
        projectOverview: <WebSlider />
    },
]

const Portfolioslider = () => {
    const settings = {
        draggable: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
            }
        ]
    };

    return (
        <>
            <div className='testimonials'>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
                />
                <div className='protofolio-slider'>
                    <Slider {...settings} dotsClass='d-none'>
                        {feedBack.map((data, index) => {
                            return (
                                <div key={index}>
                                    <WebDevelopmentCard>
                                        <div className='p-32px pb-0'>
                                            <h4 className='font-18 font-weight-700 mb-3'>{data.name}</h4>
                                            <p className='font-14 font-weight-400 mb-3'>{data.comments}</p>
                                            <a href='' className='mb-5 d-flex gap-6px text-black font-14 font-weight-700 text-center align-items-center'><span className='pb-1'>View Project</span>
                                                <BlogArrow />
                                            </a>
                                        </div>
                                        {data.projectOverview}
                                    </WebDevelopmentCard>
                                </div>
                            )
                        })}


                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Portfolioslider
