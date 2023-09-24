import { Metadata } from 'next';
import { sanityFetch } from '../../sanity/lib/sanityFetch';
import { pageQuery } from '../../sanity/lib/queries';
import { SanityDocument } from '@sanity/client';
import CustomPortableText from '../../sanity/components/CustomPortableText';

export const metadata: Metadata = {
    title: 'Home - Moment & Matter',
};

export default async function Home() {
    const data = await sanityFetch<SanityDocument>(
        {
            query: pageQuery,
            params: { slug: 'homepage' }
        }
    ).catch(() => undefined);

    if ( !data?.body) {
        return null;
    }

    return <CustomPortableText data={data}/>;
}