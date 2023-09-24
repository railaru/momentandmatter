import { HTMLAttributes } from 'react';
import { HorizontalLogo } from './Logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLElement> & {
    variants?: 'transparent' | 'whiteBackground'
}

export default function Navigation({ variants, ...props }: Props) {
    return (
        <header
            {...props}
            className={
                cn(
                    'flex items-center gap-4', {
                        'bg-transparent': variants === 'transparent',
                        'bg-white': variants === 'whiteBackground'
                    }, props.className
                )
            }
        >
            <HorizontalLogo/>

            <nav className="relative top-[1px]">
                <ul className="flex items-center gap-4 text-sm">
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link href={'/get-updates'}>Get updates</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}