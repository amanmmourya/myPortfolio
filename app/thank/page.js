// app/thanks/page.tsx or pages/thanks.tsx (depending on your Next.js structure)

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-white text-2xl font-semibold">
          Thanks for your endorsement
        </div>
        <div>
          <Link
            href="/"
            className="text-pink-700 bg-[#1a1a1a] p-[5%] rounded-2xl hover:underline transition-all ease-in duration-300 text-lg"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
