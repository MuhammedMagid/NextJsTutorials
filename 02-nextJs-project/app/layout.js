// These styles apply to every route in the application
import './globals.css'
import AppLayout from '@/components/app-layout';

export const metadata = {
  title: 'First App',
  description: 'My first Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-cardBg min-h-screen">
        <AppLayout/>
        
        {children}
        </body>

    </html>
  );
}
