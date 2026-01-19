import {routing} from "@/i18n/routing";
import {hasLocale} from 'next-intl';
import {getRequestConfig} from "next-intl/server";
import {headers} from "next/headers";
import set from "lodash.set";

export default getRequestConfig(async ({requestLocale}) => {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") || "";

    const requestedLocale = await requestLocale ?? routing.defaultLocale;
    const locale = hasLocale(routing.locales, requestedLocale) && acceptLanguage.includes(requestedLocale) ? requestedLocale : routing.defaultLocale

    const messages = fromFlatStructure((await import(`../../messages/${locale}.json`)).default)
    return {
        locale,
        messages,
    };
});

function fromFlatStructure(input: object) {
    return Object.entries(input).reduce(
        (acc, [key, value]) => set(acc, key, value),
        {}
    );
}
