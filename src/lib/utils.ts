import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function truncateString(stringToTruncate: string, characterAmount: number) {
    if (stringToTruncate.length <= characterAmount) {
        return stringToTruncate;
    }

    return stringToTruncate.slice(0, characterAmount) + '...';
}