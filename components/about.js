"use client"
import React from 'react'
import { useState } from 'react'
const about = () => {
    const [edu, setEdu] = useState(true);
    const [skill, setSkill] = useState(false);
    const handleEduClick = () => {
        setEdu(true);
        setSkill(false);
    }
    const handleSkillClick = () => {
        setEdu(false);
        setSkill(true);
    }
    const skillSet = ["Java", "C++", "Python","HTML","CSS","Tailwind CSS", "JavaScript", "MongoDB", "Node.js", "Express.js","socket.io","Mongoose ODM", "React", "Next.js","OpenCV","YOLO","Pyserial","Arduino IDE", "Numpy", "Matplotlib", "LangChain", "LTSpice", "NGSpice", "MatLab"]
    return (
        <section id='about'>
            <div className='about-container'>
                <div className='text-[#9c27b0] text-2xl md:text-5xl px-[8%] py-[5%] md:py-5 md:px-[5%] cursor-pointer'>About Me</div>
                <p className='p-5 text-gray-400 text-justify md:px-[5%]'>I'm Aman Mourya, a 3rd-year ECE student at SVNIT Surat, with a strong interest in coding, ML/AI, and data-driven technologies. I’ve worked with Python, Java, C++, full-stack development, and tools like NumPy, Pandas, and Matplotlib, along with hands-on experience in DSA and microcontrollers.</p>
                <p className='p-5 text-gray-400 text-justify md:px-[5%]'>Passionate about building real-world solutions, I'm eager to contribute to industry projects where I can apply my skills, learn from others, and make a meaningful impact.</p>

            </div>
            <div className='switch-section'>
                <div className='header flex items-center justify-center gap-x-10 md:gap-x-[10%]'>
                    <span className={`text-xl md:text-2xl text-white cursor-pointer hover:bg-gradient-to-r from-purple-950 px-2 py-1 rounded-2xl to-pink-950`} onClick={handleEduClick}>Education
                        <div className={`relative bottom-0 h-1 w-0 ${edu ? 'w-full' : 'w-0'} transition-all duration-300 ease-in  bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-2xl`}></div>
                    </span>
                    <span className={`text-xl md:text-2xl text-white cursor-pointer hover:bg-gradient-to-r from-purple-950 px-2 py-1 rounded-2xl to-pink-950`} onClick={handleSkillClick}>Skills
                        <div className={`relative bottom-0 h-1 w-0 ${skill ? 'w-full' : 'w-0'} transition-all duration-300 ease-in  bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-2xl`}></div>
                    </span>
                </div>
                <div className={`education-content ${edu ? 'block' : 'hidden'}`}>
                    <div className='w-[80%] m-auto md:w-[50%] p-3 md:px-[10%] md:py-[2%] text-gray-400'>
                        <li className=''>Sardar Vallabhbhai National Institute of Technology, Surat</li>
                        <li className=''>B.Tech. in Electronics & Communication Engineering</li>
                        <li className=''>CGPA: 9.2</li>
                    </div>
                </div>
                <div className={`skills-content ${skill ? 'block' : 'hidden'}`}>
                    <div className='w-[80%] m-auto md:w-[50%] p-3 md:px-[10%] md:py-[2%] text-white flex flex-wrap gap-4 justify-center'>
                        {skillSet.map((entry, idx) => {
                            const bgColors = ['#ba68c8', '#f06292'];
                            const bgColor = bgColors[idx % bgColors.length];

                            return (
                                <div
                                    key={idx}
                                    className='rounded-2xl shadow-lg p-2 text-center text-lg font-semibold min-w-[60px] md:min-w-[100px]'
                                    style={{ backgroundColor: bgColor }}
                                >
                                    {entry}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default about
