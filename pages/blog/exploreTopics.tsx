import BlogBulb from 'component/assets/images/blogBulb.svg'
import Image from 'next/image'
import React from 'react'

const blogData = [
    {
        id: 1,
        topic: 'Lorem ipsum do',
    },
    {
        id: 2,
        topic: 'Lorem ipsum do',
    },
    {
        id: 3,
        topic: 'Lorem ipsum do',
    },
    {
        id: 4,
        topic: 'Lorem ipsum do',
    },
    {
        id: 5,
        topic: 'Lorem ipsum do',
    },
    {
        id: 6,
        topic: 'Lorem ipsum do',
    },
    {
        id: 7,
        topic: 'Lorem ipsum do',
    },
    {
        id: 8,
        topic: 'Lorem ipsum do',
    },
]
const ExploreTopics = () => {
    return (
        <div>

            <section className='blogContents pt-5 pb-5 font-family-primary '>
                <div className='container'>
                    <h3 className='font-weight-700 font-24 mb-32px'>
                        Recent Blogs
                    </h3>
                    <div className='row blog-cards'>
                        {blogData.map((data, index) => {
                            return (
                                <div key={index} className='col-sm-6 col-md-4 col-lg-3 mb-4 blog-inner text-black'>
                                    <div className='d-flex align-items-center gap-16px explore-blog'>
                                        <Image src={BlogBulb} alt='' />
                                        <h4 className=' m-0 font-18 font-weight-700 text-capital text_center_justification'>{data.topic}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ExploreTopics