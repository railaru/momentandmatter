import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { LinkType } from '@/types';
import Hero from '@/components/containers/Hero';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client';
import { SanityImageSource } from '@sanity/asset-utils';

type Props = {
    data: SanityDocument
}

const imageBuilder = imageUrlBuilder(client);

function HeroSanity(props: {
    value: {
        title: string;
        subtitle: string;
        link: LinkType;
        image: SanityImageSource;
    }
}) {
    const {
        title,
        subtitle,
        link,
        image
    } = props.value;

    return (
        <Hero
            imageUrl={imageBuilder.image(image).url()}
            title={title}
            subtitle={subtitle}
            link={link}
        />
    );
}

const components = {
    types: {
        hero: HeroSanity,
    },
};

export default function CustomPortableText({ data }: Props) {
    return <PortableText value={data.body} components={components}/>;
}