import React from 'react'

const home = () => {
  return (
    <section id='home'>
      <div className="pt-20 min-h-screen bg-[url('/Images/tech3.avif')] bg-cover">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
                    <h1 className="font-bold text-white mb-6 text-center space-y-2">
                        <div className="flex justify-center items-center text-2xl lg:text-5xl gap-2">
                            <span className="text-base lg:text-2xl">I'm a</span>
                            <span>Full-Stack Developer</span>
                        </div>

                        <div className="flex justify-center items-center text-2xl lg:text-5xl gap-2">
                            <span>Machine Learning Engineer</span>
                            <span className="text-base lg:text-2xl">&</span>
                        </div>

                        <div className="text-2xl lg:text-5xl">
                            Electronics Innovator
                        </div>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 relative z-10">
                        Unfold my story below
                    </p>
                </div>
            </div>
            
    </section>
  )
}

export default home
