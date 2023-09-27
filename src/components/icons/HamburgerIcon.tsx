import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function HamburgerIcon({ ...props }: Props) {
    return (
        <svg
            width="26"
            height="10"
            viewBox="0 0 26 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M1 1H25" stroke="stroke-current" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M1 9H25" stroke="stroke-current" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    );
}