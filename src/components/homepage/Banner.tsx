import Image from 'next/image'
import React from 'react'
import BannerImage from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='container mx-auto bg-[#F3F3F3] py-20 px-30 rounded-3xl mt-12'>

            <div className='grid grid-cols-2 items-center'>
                <div>
                    <h1 className='font-bold text-6xl leading-20 w-131.5'>Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success mt-12 text-white">View The List</button>

                </div>
                <div className='justify-self-center'>
                    <Image src={BannerImage} alt='Banner Image' />
                </div>

            </div>

        </section>

    )
}

export default Banner