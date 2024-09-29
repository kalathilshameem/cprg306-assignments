import Link from "next/link"; // Import Link from Next.js

export default function StudentInfo() {
  return (
    <div>
      <h2>Your Name: Muhammed Shameem Kalathil</h2>
      <Link href="https://github.com/kalathilshameem/cprg306-assignments">
        My GitHub Repository {/* Link text directly inside the Link component */}
      </Link>
    </div>
  );
}
