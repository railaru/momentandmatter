'use client';

import { useParams } from 'next/navigation';
import type { SanityDocument } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import Homepage from './Homepage';
import { postQuery } from '../../../sanity/lib/queries';
import Link from 'next/link';

export default function PreviewHomepage({ homepage }: { homepage: SanityDocument }) {
    const params = useParams();
    const [data] = useLiveQuery(homepage, postQuery, params);

    return (
        <>
            <Homepage homepage={data}/>

            <Link href={'/api/exit-preview'} className="bg-blue-400 text-white fixed right-4 bottom-4 p-2 fixed z-[10]">
                Exit preview
            </Link>
        </>
    );
}