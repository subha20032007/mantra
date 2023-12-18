import React from 'react'

const Loader = () => {
    return (
        <div className='w-12  flex justify-center items-center'>
            <span className=' h-4 w-4 rounded-full animate-spin border-2 border-white border-t-transparent'></span>
        </div>
    )
}

export default Loader