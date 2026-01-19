import {Button} from "@/components/ui/button";
import {Github, Linkedin, Mail} from "lucide-react";
import {getTranslations} from "next-intl/server";

const socialMediaLinks = [
    {
        id: 'github',
        enable: false,
        href: "https://github.com",
        icon: Github
    },
    {
        id: 'linkedin',
        enable: false,
        href: "https://linkedin.com",
        icon: Linkedin
    },
    {
        id: 'email',
        enable: true,
        href: "mailto:your.email@example.com",
        icon: Mail
    }
]

export async function HeroSection() {
    const t = await getTranslations()
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100"
            role="banner"
            aria-label={'hero.label'}
        >
            <div className="max-w-4xl w-full text-center">
                <header className="mb-8">
                    <h1 className="mb-4">
                        {t.rich('hero.title', {
                            name: (chunk) => (
                                <span className="text-blue-600">{chunk}</span>
                            )
                        })}
                    </h1>
                    <h2 className="text-slate-600 mb-6">
                        {t('hero.subtitle')}
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        {t('hero.paragraph')}
                    </p>
                </header>

                <nav className="flex gap-4 justify-center mb-8" aria-label={t('hero.main-actions.nav-label')}>
                    <Button size="lg" aria-label="View portfolio work">
                        {t('hero.main-actions.view-my-work-label')}
                    </Button>
                    <Button size="lg" variant="outline" aria-label="Contact information">
                        {t('hero.main-actions.contact-me-label')}
                    </Button>
                </nav>

                <nav className="flex gap-4 justify-center" aria-label={t('hero.social-media-links.nav-label')}>
                    {socialMediaLinks.map(({id, enable, href, icon: Icon}) => {
                        if (!enable) return null;
                        return (
                            <a
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-blue-600 transition-colors"
                                aria-label={t(`hero.social-media-links.${id}-label`)}
                            >
                                <Icon className="w-6 h-6"/>
                            </a>
                        )
                    })}
                </nav>
            </div>
        </section>
    );
}