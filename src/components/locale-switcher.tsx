"use client";

import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Link, usePathname} from "@/i18n/navigation";
import {Locale} from "@/i18n/routing";
import {Globe} from "lucide-react";
import {useLocale} from 'next-intl';

const locales = [
    {value: "en-US", label: "English", flag: "🇺🇸"},
    {value: "fr-FR", label: "Français", flag: "🇫🇷"},
] satisfies { value: Locale; label: string; flag: string }[]

export function LocaleSwitcher() {
    const pathname = usePathname();
    const currentLocale = useLocale()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative bg-transparent">
                    <Globe className="h-5 w-5"/>
                    <span className="sr-only">Toggle locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((locale) => (
                    <Link
                        key={locale.value}
                        href={pathname}
                        locale={locale.value}
                    >
                        <DropdownMenuItem
                            className={locale.value === currentLocale ? "bg-accent" : ""}
                        >
                            <span className="mr-2 text-base">{locale.flag}</span>
                            <span>{locale.label}</span>
                        </DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}