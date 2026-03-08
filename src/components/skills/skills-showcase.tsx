import { AnimatePresence } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>
        <div className="mt-8 rounded-lg bg-black p-6 text-white">
          {skills.map((section) => (
            <AnimatePresence key={section.sectionName}>
              <div className="mt-6">
                <span className="text-lg font-semibold text-pink-500 sm:text-xl">
                  {section.sectionName}
                </span>
                <div className="mt-2 flex flex-wrap gap-12 text-xl text-zinc-200">
                  {section.skills.map((pill, index) => (
                    <FadeRight
                      key={`lang-${index}`}
                      duration={0.4}
                      delay={0.1 + index * 0.1}
                      whileInView={!isMobileDebonced}
                    >
                      <div className="flex flex-col items-center">
                        <SkillPill {...pill} />
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm font-medium text-pink-400">
                            {pill.percentage}%
                          </span>
                          <div className="h-2 w-24 rounded bg-zinc-700">
                            <div
                              className="h-2 rounded bg-pink-400 "
                              style={{ width: `${pill.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </FadeRight>
                  ))}
                </div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
