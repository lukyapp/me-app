import {ThemeSwitcher} from "@/components/theme-switcher";
import {useTranslations} from "next-intl";
import Image from "next/image";

export default function Home() {
    const t = useTranslations("Home");
    return (
        <main className="bg-background min-h-screen">
            <header className="border-b border-border">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <h1 className="text-xl font-semibold text-foreground">Theme Switcher</h1>
                    <ThemeSwitcher/>
                </div>
            </header>
            <div className="flex min-h-screen items-center justify-center font-sans">
                <main
                    className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt={t("nextLogoAlt")}
                        width={100}
                        height={20}
                        priority
                    />
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                        <h1 className="text-black dark:text-zinc-50 max-w-xs text-3xl font-semibold leading-10 tracking-tight">
                            {t("title")}
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-lg leading-8">
                            {t.rich("description", {
                                templates: (chunks) => (
                                    <a
                                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                        className="text-zinc-950 dark:text-zinc-50 font-medium"
                                    >
                                        {chunks}
                                    </a>
                                ),
                                learning: (chunks) => (
                                    <a
                                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                        className="text-zinc-950 dark:text-zinc-50 font-medium"
                                    >
                                        {chunks}
                                    </a>
                                ),
                            })}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                        <a
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="dark:invert"
                                src="/vercel.svg"
                                alt={t("vercelLogoAlt")}
                                width={16}
                                height={16}
                            />
                            {t("deployNow")}
                        </a>
                        <a
                            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("documentation")}
                        </a>
                    </div>
                </main>
            </div>
        </main>
    );
}
