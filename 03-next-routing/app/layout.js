import './globals.css'
import MainLayout from '@/components/main-layout';



export const metadata = {
  title: 'Next Routing',
  description: 'Routing and directories structures',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <MainLayout/>

        {children}
      </body>

    </html>
  );
}
