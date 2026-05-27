import { AnimatePresence } from "framer-motion";

import { type SkillPillProps } from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

function getSkillLevelDots(percentage: number) {
  // Map percentage to 1-5 dots
  const level = Math.round((percentage / 100) * 5);
  return Array.from({ length: 5 }, (_, i) =>
    i < level ? (
      <span key={i} className="text-lg text-pink-500">
        ●
      </span>
    ) : (
      <span key={i} className="text-lg text-zinc-500 ">
        ●
      </span>
    ),
  );
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>
        <div className="mt-8 rounded-lg bg-black p-6 text-white">
          <AnimatePresence>
            {skills.map((section) => (
              <div className="mt-6" key={section.sectionName}>
                <span className="text-lg font-semibold text-white sm:text-xl">
                  {section.sectionName}
                </span>
                <div className="mt-2 flex flex-wrap gap-12 text-xl text-zinc-200">
                  {section.skills.map((pill, index) => (
                    <FadeRight
                      key={`lang-${index}`}
                      duration={0.4}
                      delay={0.1 + index * 0.1}
                      whileInView={!isMobileDebounced}
                    >
                      <div className="flex flex-col items-center">
                        <pill.icon className="mb-2 h-6 w-6" />
                        <span className="font-medium">{pill.name}</span>
                        <div className="mt-2 flex items-center gap-2">
                          {getSkillLevelDots(pill.percentage)}
                        </div>
                      </div>
                    </FadeRight>
                  ))}
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
