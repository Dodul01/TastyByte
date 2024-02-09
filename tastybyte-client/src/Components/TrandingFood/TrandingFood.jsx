import React from 'react'
import Section from '../Section/Section'

const TrandingFood = () => {
    const trendingFood = [
        {
            "foodName": "Sizzling Sriracha Wings",
            "restaurantName": "Spice Fusion Bistro",
            "rating": 4.8,
            "reviewCount": 120,
            "price": 12.99,
            "image": "https://i.ibb.co/9q7nNPy/pngwing-com.png"
        },
        {
            "foodName": "Mango Tango Sushi Roll",
            "restaurantName": "Sushi Sensations",
            "rating": 4.5,
            "reviewCount": 95,
            "price": 15.99,
            "image": "https://i.ibb.co/9q7nNPy/pngwing-com.png"
        },
        {
            "foodName": "Zesty Zoodle Salad",
            "restaurantName": "Veggie Delight Cafe",
            "rating": 4.6,
            "reviewCount": 110,
            "price": 9.99,
            "image": "https://i.ibb.co/9q7nNPy/pngwing-com.png"
        },
        {
            "foodName": "Eggplant Parmesan",
            "restaurantName": "Gourmet Grains",
            "rating": 4.7,
            "reviewCount": 105,
            "price": 14.99,
            "image": "https://i.ibb.co/9q7nNPy/pngwing-com.png"
        }
    ];

    return (
        <div>
            <Section heading={'Tranding Food'} subheading={''}>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    {trendingFood.map((food) => {
                        return <div className='bg-[#FAF5FF] p-2 rounded-lg border shadow'>
                            <div className='w-full flex items-center justify-center'>
                                <img src={food.image} alt="food_image" />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold'>{food.foodName}</h3>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-lg font-semibold'>${food.price}</h2>
                                    <span className='text-2xl font-semibold bg-[#E03546] p-2 px-4 rounded-lg text-white cursor-pointer'>+</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </Section>
        </div>
    )
}

export default TrandingFood