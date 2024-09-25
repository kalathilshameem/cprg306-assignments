import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <span className="rounded-full border border-solid border-transparent bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 cursor-pointer">
          Go to Week 2 Page
        </span>
      </Link>
    </main>
  );
}
