/*
  HomePage
  ========
  Composes all homepage sections in the correct order.
  Each section is its own component — this page is purely
  orchestration, containing no presentational logic of its own.
*/

import {
  Hero,
  SelectedWork,
  AboutPreview,
  Expertise,
  VenturesPreview,
  ExperiencePreview,
  InsightsPreview,
  ContactCTA,
} from '@/components/home';

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <Expertise />
      <VenturesPreview />
      <ExperiencePreview />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
