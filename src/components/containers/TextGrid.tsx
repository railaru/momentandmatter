import { HTMLAttributes } from 'react';
import { SanityColor } from '@/types';
import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';

export type TextGridProps = {
    items: {
        title: string;
        richText: SanityDocument;
    }[];
    textColor?: SanityColor;
    backgroundColor?: SanityColor;
}

type Props = HTMLAttributes<HTMLElement> & TextGridProps;

export default function TextGrid(
    {
        backgroundColor,
        textColor,
        items,
        ...props
    }: Props) {

    return (
        <div
            {...props}
            className={props.className}
            style={{
                backgroundColor: backgroundColor?.hex || '#646F60',
                color: textColor?.hex || '#fff',
            }}
        >
            <div
                className="grid grid-cols-2 gap-8 py-16 mx-auto max-w-[1200px] px-4"
            >
                {
                    items.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-3xl font-gascogne">{item.title}</h3>

                            <div
                                className="mt-4 prose"
                                style={{
                                    color: textColor?.hex || '#fff',
                                }}
                            >
                                <PortableText value={item.richText}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}