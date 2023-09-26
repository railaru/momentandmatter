import { Metadata } from 'next';
import { sanityFetch, token } from '../../../sanity/lib/sanityFetch';
import { pageQuery } from '../../../sanity/lib/queries';
import { SanityDocument } from '@sanity/client';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/containers/PreviewProvider';
import PreviewHomepage from '@/app/(main)/PreviewHomepage';
import Homepage from '@/app/(main)/Homepage';

export const metadata: Metadata = {
    title: 'Home - Moment & Matter',
};

export default async function Home() {
    const homepage = await sanityFetch<SanityDocument>(
        {
            query: pageQuery,
            params: { slug: 'homepage' }
        }
    ).catch(() => undefined);

    if ( !homepage?.body) {
        return null;
    }

    const isDraftMode = draftMode().isEnabled;

    if (isDraftMode && token) {
        return (
            <PreviewProvider token={token}>
                <PreviewHomepage homepage={homepage}/>
            </PreviewProvider>
        );
    }

    return <Homepage homepage={homepage}/>;
}