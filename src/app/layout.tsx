import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const gascogne = localFont({
    variable: '--font-gascogne',
    src: [
        {
            path: './../../public/assets/fonts/Gascogne-Regular Regular.ttf',
            weight: '300',
        },
    ],
});


export default function RootLayout(
    {
        children,
    }: {
        children: ReactNode
    }
) {
    return (
        <html lang="en">
        <body className={gascogne.variable}>

        <Navigation/>

        {children}

        <Footer/>

        </body>
        </html>
    );
}
