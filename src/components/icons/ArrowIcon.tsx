import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function ArrowIcon({ ...props }: Props) {
    return (
        <svg width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M33 10.3334L40.3333 15.5L33 20.6667"
                stroke="stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M3.66667 15.5H40.3333"
                stroke="stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
