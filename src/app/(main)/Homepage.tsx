import CustomPortableText from '../../../sanity/components/CustomPortableText';
import { SanityDocument } from '@sanity/client';

type Props = {
    homepage: SanityDocument;
};

export default function Homepage({ homepage }: Props) {
    if ( !homepage?.body) {
        return null;
    }

    return (
        <>
            <CustomPortableText data={homepage}/>
        </>
    );
}