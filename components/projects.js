"use client"
import React from 'react'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
const projects = () => {
    const projects =  [
        {
            projectName: "Object Following Bot",
            imageUrl: '/Images/ofb.jpg',
            projectDescription: "An object-following bot that uses computer vision and machine learning to detect and track objects in real time. Leveraging CUDA GPU acceleration, the system ensures fast and efficient processing, enabling smooth and accurate movement as it follows target objects.",
            projectTechStack: "Python, OpenCV, YOLO, Matplotlib, Numpy, Pyserial, Arduino IDE",
            githubLink: "https://github.com/amanmmourya/Object-Following-Bot",
            liveLink: "none",
            likes: 0,
        },
        {
            projectName: "Thoughtflow Messaging Platform",
            imageUrl: '/Images/tf.jpg',
            projectDescription: "ThoughtFlow is a real-time messaging platform with an anonymous feedback feature called Dark Window. It enables open communication and honest feedback, making it useful for schools, colleges, and public engagement.",
            projectTechStack: "JavaScript, Node.js, Express.js, MongoDB, socket.io",
            githubLink: "https://github.com/amanmmourya/ThoughtFlow-Project",
            liveLink: "none",
            likes: 0 
        },
        {
            projectName: "Weddings and Event Booking Site",
            imageUrl: '/Images/se.avif',
            projectDescription: "Developed a full-featured website for Sunrise Events, a service provider in Surat, enabling users to book events and weddings seamlessly. The platform includes an intuitive admin panel, call-to-action support, and agentic AI integration for enhanced user interaction and service management.",
            projectTechStack: "MERN Stack, LangChain",
            githubLink: "https://github.com/amanmmourya/Sunrise-Events",
            liveLink: "none",
            likes: 0 
        },
        {
            projectName: "Medical Prescription System",
            imageUrl: '/Images/dps.png',
            projectDescription: "Developed a medical prescription system where users can input symptoms and relevant information to receive diagnostic insights and suitable medication recommendations. The system is built on trusted medical books, research papers, and verified articles, ensuring reliable and evidence-based outputs.",
            projectTechStack: "Python, FAISS, Langchain, Unstructured, GEMINI API",
            githubLink: "https://github.com/amanmmourya/Medical-Prescription-System",
            liveLink: "none",
            likes: 0 
        },
        {
            projectName: "Uber-Clone",
            imageUrl: '/Images/uber.webp',
            projectDescription: "Designed a responsive frontend using React for a ride-booking platform, integrating maps and geolocation APIs to enable location-based route visualization and seamless user interaction.",
            projectTechStack: "Tailwind CSS, React",
            githubLink: "https://github.com/amanmmourya/Uber-Clone",
            liveLink: "none",
            likes: 0 
        },
        {
            projectName: "Line Follower Bot",
            imageUrl: '/Images/lfb.jpg',
            projectDescription: "Built an autonomous line follower robot capable of detecting and following a path using IR sensors and microcontroller-based control. The system responds accurately to line patterns for smooth navigation.",
            projectTechStack: "Arduino IDE, Microcontroller, Circuit Design",
            githubLink: "",
            liveLink: "none",
            likes: 0 
        },
        {
            projectName: "AI Powered Finance Manager",
            imageUrl: '/Images/fin.webp',
            projectDescription: "Developed an AI-powered finance manager that helps users track their expenses, manage budgets, and gain insights into their financial habits. It has OCR capabilities to scan and process bills, making financial management more efficient and user-friendly.",
            projectTechStack: "Next.js, Redux Toolkit, Node.js, Expresss.js, MySQL, Tesseract.js",
            githubLink: "",
            liveLink: "none",
            likes: 0
        }
        
    ]
    const [projectsState, setProjectState]=useState(projects);
      useEffect( ()=>{
        const func=async ()=>{
        try{

            const projectsFromServer1 = await fetch('/api/getprojects');
            const temp=await projectsFromServer1.json();
            const newarr =temp.map((project) => {

            return {
                ...project,
                isLiked: false,
                likes: project.likes
            };


            })
            setProjectState(newarr);
            console.log(temp);
        }catch(err){
            console.log(err);
            const newarr=projects.map((project) => {

            return {
                ...project,
                isLiked: false,
                likes: project.likes
            };


            })
            setProjectState(newarr);


        }
    }
    func()
      },[])
    
    const upDateLikesOnDB=async (newLikes,projectName)=>{
        const data={
            newLikes:newLikes,
            projectName:projectName
        }
        try{
            const statusOfLikes=await fetch('api/updatelike',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)

            })
            console.log(statusOfLikes);
        }catch(err){
            console.log(err);
        }
    }
    const toggleLike = (idx) => {
        setProjectState((prev) => {
            return prev.map((project, i) => {
                if (i == idx) {
                    const newLikedState = !project.isLiked;
                    const newLikes = newLikedState
                        ? project.likes + 1
                        : project.likes - 1;
                    upDateLikesOnDB(newLikes,projectsState[idx].projectName);
                    return {
                        ...project,
                        isLiked: newLikedState,
                        likes: newLikes
                    }
                }
                return project;
            })
        })
    }
    return (
        <section id='projects'>
            <div className='projects-container'>
                <div className='text-[#9c27b0] text-2xl md:text-5xl px-[8%] py-[5%] md:py-5 md:px-[5%] cursor-pointer'>My Projects</div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsState.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1a1a1a] text-white rounded-xl p-4 shadow-md flex flex-col md:flex-row gap-4 overflow-hidden"
                    >
                        {/* Image */}
                        <div
                            style={{ backgroundImage: `url(${project.imageUrl})` }}
                            className="w-full md:w-[40%] h-48 md:h-auto flex-shrink-0 rounded-lg overflow-hidden bg-cover flex items-center justify-center text-sm text-white"
                        >
                            {/* Replace with actual image */}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between gap-2 w-full">
                            <h2 className="text-[#ff4081] text-xl md:text-2xl font-semibold">
                                {project.projectName}
                            </h2>
                            <div className="text-gray-400 break-words text-justify">{project.projectDescription}</div>
                            <div className="text-[#9c27b0] break-words">{project.projectTechStack}</div>
                            <a
                                href={project.githubLink}
                                className="text-[#e91e63] hover:text-[#ff4081] mt-2"
                            >
                                View on GitHub
                            </a>
                            <div className='flex gap-2'>Likes  <Heart className={`${project.isLiked ? 'fill-red-600' : ''}`} onClick={() => { toggleLike(idx) }} /> <span className='text-red-700'>{project.likes}</span></div>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default projects