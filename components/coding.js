import React from 'react'

const coding = () => {
    return (
        <>
            <div className='text-[#9c27b0] text-2xl md:text-5xl px-[8%] py-[5%] md:py-5 md:px-[5%] cursor-pointer'>Coding Profiles</div>

            <div className='container p-2 grid grid-cols-3 justify-items-center'>
                <a href='https://leetcode.com/u/Aman__Mourya__31/' className='leetcode rounded-2xl hover:scale-[1.1] transition-all duration-300 h-[5em] w-[5em] md:h-[10em] md:w-[10em] bg-contain' style={{backgroundImage:`url('/Images/leetcode.png')`}}>
                    
                </a >
                <a href='https://www.geeksforgeeks.org/user/mouryaama2wex/' className='gfg rounded-2xl hover:scale-[1.1] transition-all duration-300 h-[5em] w-[5em] md:h-[10em] md:w-[10em] bg-contain' style={{backgroundImage:`url('/Images/gfg.png')`}}>
                    
                </a >
                <a href='https://codeforces.com/profile/Aman_Mourya31_' className='cf rounded-2xl hover:scale-[1.1] transition-all duration-300 h-[5em] w-[5em] md:h-[10em] md:w-[10em] bg-contain' style={{backgroundImage:`url('/Images/cf.webp')`}}>
                    
                </a >
            </div>
        </>
    )
}

export default coding
