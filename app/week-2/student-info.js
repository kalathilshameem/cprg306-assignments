// app/week-2/student-info.js
import Link from 'next/link'; // Import Link from Next.js

export default function StudentInfo() {
    return (
        <div>
            <p>Your Name: Muhammed Shameem Kalathil</p>
            <Link href="https://github.com/kalathilshameem/cprg306-assignments">
                My GitHub Repository
            </Link>
        </div>
    );
}
