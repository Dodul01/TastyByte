import { Player } from '@lottiefiles/react-lottie-player'
import bannerImage from './banner.json';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='flex items-center justify-between lg:flex-row flex-col-reverse p-2'>
            <div className='flex-1'>
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" className='lg:text-5xl md:text-3xl text-2xl mb-2 font-semibold'>Order Food In One <br /> Click Hassel Free</h1>
                <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150" className='lg:text-xl md:text-lg text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit deserunt quos cum! Incidunt enim nemo quia, similique qui magnam praesentium.</p>
                <div data-aos="fade-up" data-aos-duration="1400" data-aos-delay="250" className='mt-4'>
                    <Link to='/signUp' className='bg-[#E03546] px-5 py-2 text-white font-medium rounded-lg'>Join Now</Link>
                </div>
            </div>
            <div className='flex-1' data-aos="fade-out" data-aos-delay="500" data-aos-duration="1600">
                <Player className='max-w-[600px] h-auto' src={bannerImage} speed={1} autoplay loop />
            </div>
        </div>
    )
}

export default Banner