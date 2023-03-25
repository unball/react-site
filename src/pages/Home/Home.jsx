import React from "react";

import { AboutSection } from "../../components/AboutSection";
import { AreasSection } from "../../components/AreasSection";
import { CompetitionsSection } from "../../components/CompetitionsSection";
import { ContactSection } from "../../components/ContactSection";
import { MembersSection } from "../../components/MembersSection";

export function Home() {
  return (
    <div>
      <AboutSection />
      <AreasSection />
      <CompetitionsSection />
      <ContactSection />
      <MembersSection />
    </div>
  );
}
