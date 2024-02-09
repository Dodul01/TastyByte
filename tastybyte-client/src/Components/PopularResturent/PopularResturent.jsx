import React from 'react'
import Section from '../Section/Section'

const PopularResturent = () => {
    const restaurants = [
        {
            name: "The Golden Curry",
            isOpen: true,
            image: "https://i.insider.com/5dc498fe695b58645d6f1dbc?width=700",
        },
        {
            name: "Pasta Paradise",
            isOpen: false,
            image: "https://i.insider.com/5dc498fe695b58645d6f1dbc?width=700",
        },
        {
            name: "Spicy Dragon",
            isOpen: true,
            image: "https://i.insider.com/5dc498fe695b58645d6f1dbc?width=700",
        },
        {
            name: "Happy Burger",
            isOpen: true,
            image: "https://i.insider.com/5dc498fe695b58645d6f1dbc?width=700",
        },
    ];

    return (
        <div>
            <Section heading={'Order From Popular Brand'} subheading={''}>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>

                    {restaurants.map((restaurant) => {
                        return <div className='bg-[#FAF5FF] p-2 rounded-lg border shadow cursor-pointer'>
                            <div className='w-full flex items-center justify-center'>
                                <img src={restaurant.image} alt="food_image" />
                            </div>
                            <div className='flex items-center justify-between my-3'>
                                <h3 className='text-xl font-semibold'>{restaurant.name}</h3>
                                <h2 className='text-md font-semibold'>{restaurant.isOpen ? <span className='bg-green-400 p-1 rounded-lg text-white'>Open</span> : <span className='bg-red-400 p-1 rounded-lg text-white'>Closed</span>}</h2>
                            </div>
                        </div>
                    })}
                </div>
            </Section>
        </div>
    )
}

export default PopularResturent