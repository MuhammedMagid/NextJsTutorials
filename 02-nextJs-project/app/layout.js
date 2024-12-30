// These styles apply to every route in the application
import './globals.css'
import AppLayout from '@/components/header/app-layout';
import MainBg from '@/components/background/main-bg';

//metedata for the home page
export const metadata = {
  title: 'Cuisine Home',
  description: 'Cuisine is a recipe sharing platform that allows users to share their favorite recipes with the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <MainBg/>
        <AppLayout/>
        {children}
        </body>

    </html>
  );
}
