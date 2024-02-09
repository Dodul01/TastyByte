import React from 'react'

const Section = ({ heading, subheading, children }) => {
    return (
        <div className='lg:my-10 my-2'>
            <div className='lg:mb-8 mb-2'>
                <h2 className='lg:text-3xl text-2xl font-semibold my-2'>{heading}</h2>
                <h3 className='text-xl font-semibold my-2'>{subheading}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Section