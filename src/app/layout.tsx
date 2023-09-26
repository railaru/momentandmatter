import './globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

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
        {children}
        </body>
        </html>
    );
}
