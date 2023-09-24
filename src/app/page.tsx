import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home - Moment & Matter',
};

export default async function Home() {
    return <h1 className="font-gascogne">Hello World</h1>;
}