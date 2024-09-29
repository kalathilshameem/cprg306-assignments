import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>

      <section className="flex flex-col gap-4">
        <Link href="/week-2">
          <span className="rounded-full border border-transparent bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 cursor-pointer transition">
            Go to Week 2 Page
          </span>
        </Link>

        <Link href="/week-3">
          <span className="rounded-full border border-transparent bg-green-600 text-white py-2 px-4 hover:bg-green-700 cursor-pointer transition">
            Go to Week 3 Page
          </span>
        </Link>
      </section>
    </main>
  );
}
