import { useEffect, useState } from 'react'
import axios from 'axios'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { animateGallery } from './gsap'

const gallery = () => {

    useEffect(() => {
        animateGallery();
    }, [])

    const [userData, setUserData] = useState([])
    const [count, setCount] = useState(1)
    const [loading, setLoading] = useState(false)

    const data = async () => {
        setLoading(true)
        const response = await axios.get(`https://picsum.photos/v2/list?page=${count}&limit=20`)
        setUserData(response.data)
        setLoading(false)
    }
    let PrintedData = loading ? 
        <div className='flex items-center justify-center h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80'><h1 className='text-lg sm:text-xl md:text-2xl font-bold text-center'>Loading...</h1></div> 
        : null

    useEffect(function () {
        data()
    }, [count])

    if (userData.length > 0 && !loading) {
        PrintedData = userData.map(function (e, idx) {
            return (
                <div key={idx} className='bg-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                    <a href={e.download_url} target="_blank" rel="noopener noreferrer">
                        <div className='rounded-2xl overflow-hidden h-30 w-30 sm:h-60 sm:w-60 md:h-80 md:w-80'>
                            <img src={e.download_url} alt="Images" className='object-cover object-center h-full w-full' loading='lazy' />
                        </div>
                    </a>

                    <div className='flex flex-col sm:flex-row items-center justify-between py-2 px-2 sm:px-4 gap-2'>
                        <h2 className='text-xs sm:text-sm md:text-base truncate'>{e.author}</h2>
                        <button className='bg-green-600 hover:bg-green-700 px-2 sm:px-4 py-1 sm:py-2 rounded active:scale-95 text-white text-xs sm:text-sm'><a href={e.url} target="_blank" rel="noopener noreferrer">Download</a></button>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className='mt-6 sm:mt-8 md:mt-10 overflow-auto h-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8' id='gallery'>
            <h1 className='my-4 sm:my-6 font-bold text-2xl sm:text-4xl md:text-5xl skill-heading'>Image Gallery</h1>

            <div className='flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-center mb-6 sm:mb-8 md:mb-10 gallery-card'>
                {PrintedData}
            </div>
            <div className='flex items-center justify-center gap-2 sm:gap-4 flex-wrap pb-6'>
                <a href="#gallery">
                    <button
                        disabled={count == 1}
                        style={{opacity: count == 1 ? 0.5 : 1}}
                        onClick={() => {
                            if (count > 1) {
                                setCount(count - 1)
                            }
                            setUserData([])
                            setLoading(true)
                        }}
                        className='cursor-pointer active:scale-90 p-1 sm:p-2 hover:bg-gray-100 rounded transition'>
                        <ChevronLeft size={24} strokeWidth={3} className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </button>
                </a>
                <div className='text-sm sm:text-base md:text-lg font-semibold'>Page No {count}</div>
                <a href="#gallery">
                    <button
                        onClick={() => {
                            setCount(count + 1)
                            setUserData([])
                            setLoading(true)
                        }}
                        className='cursor-pointer active:scale-90 p-1 sm:p-2 hover:bg-gray-100 rounded transition'>
                        <ChevronRight size={24} strokeWidth={3} className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default gallery
