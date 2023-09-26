import { HTMLAttributes } from 'react';
import { SanityColor } from '@/types';

export type TextGridProps = {
    items: {
        title: string;
        description: string;
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

                            <p className="mt-4">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}