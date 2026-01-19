import {Card, CardContent} from "@/components/ui/card";
import {Code2, Database, Layout, Server, Smartphone, Zap} from "lucide-react";
import {getTranslations} from "next-intl/server";

const skills = [
    {
        icon: Layout,
        title: 'skills.frontend.title',
        description: 'skills.frontend.description',
    },
    {
        icon: Server,
        title: 'skills.backend.title',
        description: 'skills.backend.description',
    },
    {
        icon: Database,
        title: 'skills.database.title',
        description: 'skills.database.description',
    },
    {
        icon: Code2,
        title: 'skills.devops.title',
        description: 'skills.devops.description',
    },
    {
        icon: Smartphone,
        title: 'skills.responsive.title',
        description: 'skills.responsive.description',
    },
    {
        icon: Zap,
        title: 'skills.performance.title',
        description: 'skills.performance.description',
    },
];

export async function SkillsSection() {
    const t = await getTranslations()

    return (
        <section className="py-20 px-4 bg-white" id="skills" aria-labelledby="skills-heading">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <h2 id="skills-heading" className="mb-4">
                        {t('skills.title')}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t('skills.subtitle')}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map(({title, description, icon: Icon}, index) => {
                        return (
                            <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                                <CardContent className="p-6">
                                    <div
                                        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-blue-600"/>
                                    </div>
                                    <h3 className="mb-2">{t(title)}</h3>
                                    <p className="text-slate-600 text-sm">{t(description)}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}