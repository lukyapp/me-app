import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    defaultLocale: 'fr-FR',
    locales: ['en-US', 'fr-FR'],
});

export type Locale = typeof routing.locales[number];
