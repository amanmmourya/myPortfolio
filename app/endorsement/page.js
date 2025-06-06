"use client"
import { useState } from "react";

export default function EndorsementForm() {
  return (
    <>
    <div className={`text-center m-auto min-h-screen flex justify-center items-center `}>
      <div className="text bg-[#1a1a1a] p-[5%] rounded-2xl text-xl flex flex-col">Login to drop an Endorsement 
        <a href="/signin" className="text-pink-500">Click Here</a>
      </div>
    </div>
    </>
  );
}
