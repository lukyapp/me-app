import { Header } from '@/components/header';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function NextHome() {
  const t = await getTranslations('NextHome');
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt={t('nextLogoAlt')}
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
              {t('title')}
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {t.rich('description', {
                templates: (chunks) => (
                  <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="font-medium text-zinc-950 dark:text-zinc-50"
                  >
                    {chunks}
                  </a>
                ),
                learning: (chunks) => (
                  <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="font-medium text-zinc-950 dark:text-zinc-50"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="bg-foreground text-background hover:bg-foreground/80 flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt={t('vercelLogoAlt')}
                width={16}
                height={16}
              />
              {t('deployNow')}
            </a>
            <a
              className="border-border hover:bg-accent hover:text-accent-foreground flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('documentation')}
            </a>
          </div>
        </main>
      </div>
    </main>
  );
}
