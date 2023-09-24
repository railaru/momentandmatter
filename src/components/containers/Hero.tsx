import { HTMLAttributes } from 'react';
import { LinkType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = HTMLAttributes<HTMLElement> & {
    imageUrl: string;
    title: string;
    subtitle: string;
    link: LinkType;
}

export default function Hero(
    {
        imageUrl,
        title,
        subtitle,
        link,
        ...props
    }: Props
) {
    return (
        <div {...props} className="relative">
            <Image
                src={imageUrl}
                alt={title}
                sizes="100vw"
                width={500}
                height={300}
                className="object-cover w-full h-screen"
            />

            <div
                className="flex flex-col items-center gap-6 absolute top-0 left-0 text-white z-[1] left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center w-full px-4"
            >
                <h1 className="text-4xl font-gascogne">
                    {title}
                </h1>

                <p className="text-lg">
                    {subtitle}
                </p>

                <Link href={link.url} className="text-xs py-[11px] px-4 border border-white">{link.text}</Link>
            </div>

            <div className="bg-gradient-to-b from-[#000]/50 to-[#000]/0 absolute w-full h-full left-0 top-0"/>
        </div>
    );
}