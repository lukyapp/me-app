import {LocaleSwitcher} from "@/components/locale-switcher";
import {ThemeSwitcher} from "@/components/theme-switcher";
import {cn} from "@/lib/utils";
import {getTranslations} from "next-intl/server";
import {ComponentProps} from "react";

export async function Header({className}: ComponentProps<'header'>) {
    const t = await getTranslations()

    return (
        <header className={cn(className, "border-b border-border")}>
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <h1 className="text-xl font-semibold text-foreground">{t("app.title")}</h1>
                <div className="flex items-center gap-2">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}