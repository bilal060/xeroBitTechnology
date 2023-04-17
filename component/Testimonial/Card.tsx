import React from 'react'

const TestimonialCard = (props: any) => {
    const { children } = props;
    return (
        <div className='testimonial-card'>
            {children}
        </div>
    )
}

export default TestimonialCard