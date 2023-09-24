import { HTMLAttributes } from 'react';
import { HorizontalLogo } from '@/components/Logo';
import Link from 'next/link';

type Props = HTMLAttributes<HTMLElement>

export default function Navigation({ ...props }: Props) {
    return (
        <header {...props} className="">
            <HorizontalLogo/>

            <nav>
                <ul>
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