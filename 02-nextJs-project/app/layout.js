// These styles apply to every route in the application
import './globals.css'
import AppLayout from '@/components/header/app-layout';
import MainBg from '@/components/background/main-bg';

export const metadata = {
  title: 'First App',
  description: 'My first Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="">
        <MainBg/>
        <AppLayout/>
        {children}
        </body>

    </html>
  );
}
