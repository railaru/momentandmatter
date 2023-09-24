import { Metadata } from 'next';
import Hero from '@/components/containers/Hero';

export const metadata: Metadata = {
    title: 'Home - Moment & Matter',
};

export default async function Home() {
    return (
        <>
            <Hero
                imageUrl={'/assets/images/hero-img.jpeg'}
                title={'Elements of Productivity'}
                subtitle={'Apparel for remote work.'}
                link={
                    { url: '/', text: 'Get updates' }
                }
            />
        </>
    );
}