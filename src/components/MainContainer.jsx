import React from 'react'
import delivery from './img/delivery.png'

const MainContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivery} className='w-full h-full object-contain' alt='delivery' />
                    </div>

                </div>

                <p className='text-[2.5rem] lg:[4.5rem] font-bold tracking-wide text-headingColor'>
                    The fastest delivery in
                    <span className='text-orange-600 text-[3rem] md:text-[5rem]'>your city</span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat repellendus nam porro hic quisquam? Esse quia aliquam voluptate qui quaerat mollitia, ducimus asperiores quod? Placeat laudantium necessitatibus iure maiores!
                </p>

                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'></button>

            </div>


            <div className='py-2 flex-1'></div>
        </div>
    )
}

export default MainContainer