import { HTMLAttributes } from 'react';
import { HorizontalLogo } from './Logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { HamburgerIcon } from '@/components/icons/HamburgerIcon';

type Props = HTMLAttributes<HTMLElement> & {
    variants?: 'transparent' | 'whiteBackground'
}

export default function Header({ variants, ...props }: Props) {
    const data = [
        {
            url: '/about',
            text: 'About'
        },
        {
            url: '#get-updates',
            text: 'Get updates'
        }
    ];

    return (
        <header
            {...props}
            className={
                cn(
                    'flex items-center gap-4 justify-between md:justify-start w-full', {
                        'bg-transparent absolute top-0 left-0 text-white z-[2] p-4': variants === 'transparent',
                        'bg-white': variants === 'whiteBackground'
                    }, props.className
                )
            }
        >
            <Link href={'/'} className="inline-block">
                <HorizontalLogo/>
            </Link>

            <nav className="relative top-[1px] hidden md:block">
                <ul className="flex items-center gap-4 text-sm">
                    {
                        data.map(((item, index) => (
                            <li key={index}>
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        )))
                    }
                </ul>
            </nav>

            <Sheet>
                <SheetTrigger className="md:hidden p-4 -m-4" aria-label="Hamburger menu open">
                    <HamburgerIcon/>
                </SheetTrigger>

                <SheetContent>
                    <ul className="flex flex-col gap-1 text-sm">
                        {
                            data.map(((item, index) => (
                                <li key={index}>
                                    <Link className="inline-block w-full py-4" href={item.url}>{item.text}</Link>
                                </li>
                            )))
                        }
                    </ul>
                </SheetContent>
            </Sheet>
        </header>
    );
}