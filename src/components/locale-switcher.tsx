"use client";

import {usePathname, useRouter} from "@/i18n/navigation";
import {Locale, routing} from "@/i18n/routing";

export function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (locale: Locale) => {
        router.replace(pathname, { locale });
    };

    return (
        <div className="fixed right-4 top-4 flex gap-2 rounded-full bg-white/80 px-3 py-2 text-sm shadow-lg backdrop-blur-sm dark:bg-black/80">
            {routing.locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className="rounded-full px-3 py-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    );
}