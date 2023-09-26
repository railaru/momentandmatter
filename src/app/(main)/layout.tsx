import '../globals.css';
import { ReactNode } from 'react';
import Header from '@/components/containers/Header';
import Footer from '@/components/containers/Footer';

export default function Layout(
    {
        children,
    }: {
        children: ReactNode
    }
) {
    return (
        <>
            <Header variants="transparent"/>

            {children}
            
            <Footer/>
        </>
    );
}
