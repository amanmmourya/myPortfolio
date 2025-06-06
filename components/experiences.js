import React from 'react'

const Experiences = () => {
  return (
    <section id='experiences'>
        <div className='text-[#9c27b0] text-2xl md:text-5xl px-[8%] py-[5%] md:py-5 md:px-[5%] cursor-pointer'>Experiences</div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[8%] pb-10 bg-[#1a1a1a]">
        {/* CARD COMPONENT */}
        {[
          {
            title: "Drishti SVNIT",
            duration: "Duration: Aug/2024-Oct/2024",
            desc: "It is a technical and robotics club where I gained hands-on experience in computer vision and learned to work in a collaborative, professional environment.",
            link: "https://drishti-svnit.github.io/drishti/",
            img: "/Images/drishti.jpg",
          },
          {
            title: "Google Developer's Group",
            duration: "Duration: Jan/2025 - Present",
            desc: "In the Google Developer Student Club, I connected with experienced seniors, participated in events and hackathons, and explored various technologies to enhance my skills.",
            link: "https://gdg.community.dev/gdg-on-campus-sardar-vallabhbhai-national-institute-of-technology-surat-india/",
            img: "/Images/gdg.png",
          },
          {
            title: "ACM SVNIT",
            duration: "Duration: Sep/2024 - Present",
            desc: "As an active member of the ACM, I participated in various technical events and gained deeper insights into software engineering and modern development practices.",
            link: "https://nitsurat.acm.org/",
            img: "/Images/acm.jpg",
          },
        ].map((exp, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div
              className="h-[18em] bg-cover bg-center flex flex-col justify-center items-center text-center p-5 relative"
              style={{ backgroundImage: `url(${exp.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl group-hover:bg-black/70 transition-all"></div>
              <div className="z-10 text-2xl md:text-3xl text-[#ff4081] font-semibold">
                {exp.title}
              </div>
              <div className="z-10 text-sm md:text-base text-gray-200">
                {exp.duration}
              </div>
              <div className="z-10 text-sm text-gray-300 px-2 md:px-6">
                {exp.desc}
              </div>
              <a
                href={exp.link}
                target="_blank"
                className="z-10 mt-2 text-purple-400 hover:text-pink-400"
              >
                Visit their site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
