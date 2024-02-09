import React from 'react'
import Section from '../Section/Section'

const SpecialOffer = () => {
    const specialOffers = [
        {
            foodName: "Smoked Salmon pizza",
            price: 15.99,
            restaurantName: "The Pizzaiolo",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NwUKg2CoPCnAzTyy4-yD7fTS_A2pbm-aFg&usqp=CAU",
        },
        {
            foodName: "Vegan pad thai",
            price: 12.50,
            restaurantName: "Taste of Siam",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NwUKg2CoPCnAzTyy4-yD7fTS_A2pbm-aFg&usqp=CAU",
        },
        {
            foodName: "Wagyu beef burger",
            price: 24.99,
            restaurantName: "The Grill House",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NwUKg2CoPCnAzTyy4-yD7fTS_A2pbm-aFg&usqp=CAU",
        },
        {
            foodName: "Spicy tuna roll",
            price: 9.99,
            restaurantName: "Sushi Haven",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NwUKg2CoPCnAzTyy4-yD7fTS_A2pbm-aFg&usqp=CAU",
        },
    ];



    return (
        <div>
            <Section heading={'Special Offers For You'}>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    {specialOffers.map(offer => {
                        return <div className='bg-[#FAF5FF] p-2 rounded-lg border shadow cursor-pointer'>
                            <div className='w-full flex items-center justify-center'>
                                <img src={offer.imageUrl} alt="food_image" />
                            </div>
                                <h3 className='text-xl font-semibold'>{offer.foodName}</h3>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-xl font-semibold'>${offer.price}</h3>
                                <span className='text-2xl font-semibold bg-[#E03546] p-2 px-4 rounded-lg text-white cursor-pointer'>+</span>
                            </div>
                        </div>
                    })}
                </div>
            </Section>
        </div>
    )
}

export default SpecialOffer