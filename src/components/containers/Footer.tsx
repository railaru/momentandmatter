import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: Props) {
    return (
        <footer {...props}>
            <p>© 2023 Moment & Matter</p>
        </footer>
    );
}