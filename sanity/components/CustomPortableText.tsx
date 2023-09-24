import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { LinkType } from '@/types';
import Hero from '@/components/containers/Hero';

type Props = {
    data: SanityDocument
}

function HeroSanity(props: {
    value: {
        title: string;
        subtitle: string;
        link: LinkType;
    }
}) {
    const { title, subtitle, link } = props.value;

    return <Hero imageUrl={'/assets/images/hero-img.jpeg'} title={title} subtitle={subtitle} link={link}/>;
}

const components = {
    types: {
        hero: HeroSanity,
    },
};

export default function CustomPortableText({ data }: Props) {
    return <PortableText value={data.body} components={components}/>;
}