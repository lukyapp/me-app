import {routing} from "@/i18n/routing";
import {hasLocale} from 'next-intl';
import {getRequestConfig} from "next-intl/server";
import {headers} from "next/headers";

export default getRequestConfig(async ({requestLocale}) => {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") || "";

    const requestedLocale = await requestLocale ?? routing.defaultLocale;
    const locale = hasLocale(routing.locales, requestedLocale) && acceptLanguage.includes(requestedLocale) ? requestedLocale : routing.defaultLocale

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
