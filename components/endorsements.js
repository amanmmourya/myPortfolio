"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
const Endorsements =() => {
  const [cardsFromServer,setCardsFromServer]=useState([]);
  useEffect( ()=>{
    const func=async ()=>{
    const cardsFromServer = await fetch('/api/getcards');
    const temp=await cardsFromServer.json();
    setCardsFromServer(temp);
    console.log(temp);
  }
  func();
  },[])
  const cards = cardsFromServer || [
    
    {
      name: "chinmay hiremath",
      position: "ECE Student at SVNIT",
      description: "Brings great energy to the team and always maintains a positive and motivating presence.",
    },
    {
      name: "rohit saini",
      position: "ECE Student at SVNIT",
      description: "Always ready to help others and takes initiative to lead in challenging situations.",
    },
    {
      name: "anshul gupta",
      position: "ECE Student at SVNIT",
      description: "Has a strong vision, impressive discipline, and is always willing to learn and grow.",
    },
    {
      name: "aditya kumbhar",
      position: "ECE Student at SVNIT",
      description: "Very consistent, detail-oriented, and always meets his commitments with excellence.",
    },
    {
      name: "anuj ajmera",
      position: "ECE Student at SVNIT",
      description: "A quick thinker and great collaborator who makes working on any project a smooth experience.",
    },
    {
      name: "chinmay chandak",
      position: "ECE Student at SVNIT",
      description: "A creative mind with sharp problem-solving skills and a calm, thoughtful attitude.",
    },
    {
      name: "mukund somani",
      position: "ECE Student at SVNIT",
      description: "Extremely reliable, composed under pressure, and consistently delivers high-quality work.",
    },
  ];

  const duplicatedCards = [...cards, ...cards, ...cards,...cards]; // for seamless scroll

  return (
    <section id="endorsements">
      <div className="text-[#9c27b0] text-2xl md:text-5xl px-[8%] py-[5%] md:py-5 md:px-[5%] cursor-pointer">
        Endorsements
      </div>

      {/* Scrollable wrapper */}
      <div className="scroll-container">
        <div className="scroll-track">
          {duplicatedCards.map((card, idx) => (
            <div
              key={idx}
              className="card bg-[#1a1a1a]"
            >
              <div className="name text-[#ff4081] text-xl md:text-2xl flex gap-x-2">{card.name} ⭐⭐⭐⭐</div>
              <div className="position text-gray-400">{card.position}</div>
              <div className="description text-white font-semibold text-wrap">"{card.description}"</div>
            </div>
          ))}
        </div>
      </div>
      <div className="endorsement-form-pre px-[10%] py-10">
        <div className="relative group border-1 border-white cursor-pointer overflow-hidden rounded-2xl transition duration-300 hover:scale-105">

          {/* Background glow with blur + opacity */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-300 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          {/* Main content card */}
          <div className="relative bg-[#1a1a1a] text-white p-4 md:p-6 text-center rounded-2xl shadow-xl transition-all duration-300 ease-in-out">
            <Link href={'/endorsement'} className="text-lg rounded-2xl md:text-xl font-medium transition-all duration-300 group-hover:text-2xl">
              "Worked with me or know me well? Click Here to drop an endorsement—help others get to know me better!"
            </Link>
          </div>

        </div>
      </div>


      {/* Styled JSX animation */}
      <style jsx>{`
        .scroll-container {
          overflow-x: auto;
          white-space: nowrap;
          padding: 1rem 0;
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .card {
          flex-shrink: 0;
          border-radius: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          margin-right: 1rem;
          color: #333;
          width: 80vw;
          height: 12em;
        }

        @media (min-width: 640px) {
          .card {
            width: 45vw;
          }
        }

        @media (min-width: 1024px) {
          .card {
            width: 28vw;
          }
        }

        .name {
          font-weight: bold;
          text-transform: capitalize;
          margin-bottom: 0.5rem;
        }

        .description {
          font-size: 0.9rem;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
          .scroll-container {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;     /* Firefox */
        }

        .scroll-container::-webkit-scrollbar {
        display: none;             /* Chrome, Safari, Opera */
        }

      `}</style>
    </section>
  );
};

export default Endorsements;
