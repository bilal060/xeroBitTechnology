import React from 'react'
import Slider from "react-slick";
import TestimonialCard from './Card';
import comment1 from '../../assets/images/comment-1.png'
import comment2 from '../../assets/images/comment-2.png'
import comment3 from '../../assets/images/comment-3.png'

import rating from '../../assets/images/rating.svg'

import Image from 'next/image';

const feedBack = [
    {
        id: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Natasha Romanoff ',
        workOn: 'Google',
        rating: 5,
        icon: comment1
    },
    {
        id: 2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Tony Stark',
        workOn: 'Google',
        rating: 5,
        icon: comment2
    },
    {
        id: 3,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Chris Hemsworth',
        workOn: 'Google',
        rating: 5,
        icon: comment3
    },
    {
        id: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Natasha Romanoff',
        workOn: 'Google',
        rating: 5,
        icon: comment1
    },
    {
        id: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Tony Stark',
        workOn: 'Google',
        rating: 5,
        icon: comment2
    },
    {
        id: 6,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.',
        name: 'Chris Hemsworth',
        workOn: 'Google',
        rating: 5,
        icon: comment3
    },
]

const Testimonial = () => {
    const settings = {
        draggable: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
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
            <section className='testimonials'>
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
                <div className='container pt-5'>
                    <div className='tes-conent'>
                        <h6 className='section-first-heading text-center font-weight-500 pt-2 pb-1'>testimonials</h6>
                        <h2 className='mb-4 mt-3 section-sub-heading text-capital text-center text-black font-weight-700'>what our clients say about us!</h2>
                        <p className='pt-4 font-16 text-dark-gray text-center mx-auto '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.
                        </p>
                    </div>
                </div>
                <div className='tes-slider'>
                    <Slider {...settings} dotsClass='d-none'>
                        {feedBack.map((data, index) => {
                            return (
                                <div key={index}>
                                    <TestimonialCard>
                                        <p className='mb-4'>{data.comment}</p>
                                        <div className='d-flex justify-content-between align-items-end gap-16px pt-2'>
                                            <div className='d-flex justify-content-start align-items-center gap-16px'>
                                                <Image src={data.icon} alt="" className='gap-16px' />
                                                <div>
                                                    <p className='m-0 font-16 font-weight-700'>{data.name}</p>
                                                    <p className='m-0 font-16 font-weight-400'>{data.workOn}</p>

                                                </div>
                                            </div>
                                            <div className='d-flex gap-6px'>
                                                <Image src={rating} alt='rating' />
                                                <Image src={rating} alt='rating' />
                                                <Image src={rating} alt='rating' />
                                                <Image src={rating} alt='rating' />
                                                <Image src={rating} alt='rating' />
                                            </div>
                                        </div>

                                    </TestimonialCard>
                                </div>
                            )
                        })}


                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Testimonial
