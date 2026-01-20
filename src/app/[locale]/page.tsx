import { Header } from '@/components/header';
import { ContactSection } from '@/features/contact/components/contact-section';
import { AboutSection } from '@/features/hero/about-section';
import { Footer } from '@/features/hero/footer';
import { HeroSection } from '@/features/hero/hero-section';
import { ProjectsSection } from '@/features/hero/projects-section';
import { SkillsSection } from '@/features/hero/skills-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header className="absolute top-0 right-0 left-0" />
      <HeroSection className="bg-gradient-to-br from-secondary to-muted" />
      <SkillsSection className="bg-background" />
      <ProjectsSection className="bg-secondary" />
      <AboutSection className="bg-background" />
      <ContactSection className="bg-secondary" />
      <Footer />
    </main>
  );
}
