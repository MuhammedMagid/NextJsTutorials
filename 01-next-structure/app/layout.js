import './globals.css'
import Link from "next/link";

export const metadata = {
  title: 'First App',
  description: 'My first Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
        {children}
        </body>

    </html>
  );
}
