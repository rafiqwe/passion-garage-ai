import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen bg-black text-white relative'>
        <div className='flex items-center justify-center h-screen'>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className='md:text-6xl text-5xl text-white font-bold font-sora'>
                    PASSION GARAGE
                </h1>
                <div className='w-full bg-red-300 h-2 mt-5 rounded-2xl'></div>
                <div>
                    <h3 className='text-2xl font-bold'>00%</h3>
                </div>
            </div>
            <div className='absolute bottom-10 font-bold transform md:right-10 right-5 text-center'>
                <h4 className='text-[16px] font-jetbrains-mono'>Driven by Passion</h4>
            </div>
            {/* <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div> */}
        </div>
    </div>
  )
}

export default Loader