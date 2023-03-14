import BlogArrow from 'component/assets/images/blogArrow'
import WebSlider from 'component/assets/images/webslider'
import Link from 'next/link'
import React from 'react'
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
const PortofolioContent = () => {
    return (
        <div className='portofolio-content'>
            <div className='row m-0'>
                {feedBack.map((data, index) => {
                    return (
                        <div key={index} className='col-md-6 portofolio-card p-0 card-main'>
                            <div className='container p-0 w-75'>
                                <div className='p-32px pb-0'>
                                    <h4 className='font-18 font-weight-700 mb-3'>{data.name}</h4>
                                    <p className='font-14 font-weight-400 mb-3'>{data.comments}</p>
                                    <Link href='portfolio/projectdetails' className='mb-4 d-flex gap-6px text-black font-14 font-weight-700 text-center align-items-center'><span className='pb-1'>View Project</span>
                                        <BlogArrow />
                                    </Link>
                                </div>
                                <div className='overview-image'>
                                    {data.projectOverview}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PortofolioContent