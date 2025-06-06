'use client'; // Only for Next.js App Router

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function AuthButton() {
  const { data: session } = useSession();
  const router=useRouter()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log("form submitted")
    const data={name:e.target.name.value,description:e.target.description.value}
    const receivedData=await fetch("/api/review",{method:'POST',body:JSON.stringify(data),headers:{"Content-Type":"application/json"}})
    const extracted=await receivedData.json();
    console.log(extracted);
    router.push('/thank')
  }
  if (session) {
    console.log(session)
    return (
      <div className="min-h-screen m-[2%] flex flex-col justify-center items-center">
        <p className="mb-4">Signed in as {session.user.email}</p>

        <div className={`flex items-center justify-center`}>
          <div className="bg-[#1a1a1a] p-8 m-4 rounded-2xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#9c27b0]">Drop Your Endorsement 💌</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg  text-[#ff4081] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  value={session.user.name}
                  readOnly
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Comment Field */}
              <div className="mb-6">
                <label htmlFor="comment" className="block  text-lg  text-[#ff4081] mb-1">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name='description'
                  placeholder="Enter your comment"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r cursor-pointer from-purple-950 to-pink-950 text-white py-2 rounded-2xl text-xl hover:scale-[1.05] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <button onClick={() => signOut()} className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-all ease-in duration-300 cursor-pointer hover:scale-[1.05]">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="text-center min-h-screen flex justify-center items-center">
      <button onClick={() => signIn('google')} className="px-4 py-2 bg-pink-600 cursor-pointer hover:bg-pink-700 hover:scale-[1.05] hover:text-lg transition-all ease-in duration-300 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
}
