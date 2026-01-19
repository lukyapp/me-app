import { Header } from '@/components/header';
import { HeroSection } from '@/features/hero/hero-section';
import { SkillsSection } from '@/features/hero/skills-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header className="absolute top-0 right-0 left-0" />
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
