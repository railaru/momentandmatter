import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() {
    draftMode().enable();
    redirect(`/`);
    return new Response(null, { status: 307 });
}