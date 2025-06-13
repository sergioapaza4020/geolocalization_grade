import type { Metadata } from 'next';

import { config } from '@/config';
import { redirect } from 'next/navigation';

export const metadata = { title: `General | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): never {
  redirect('/dashboard/profile');
}
