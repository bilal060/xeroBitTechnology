import React from 'react'

const WebDevelopmentCard = (props: any) => {
    const { children } = props;
    return (
        <div className='web-development-slick-card'>
            {children}
        </div>
    )
}

export default WebDevelopmentCard