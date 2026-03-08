import type { ComponentType } from "react";

export interface SkillPillProps {
  name: string;
  icon: ComponentType<any>;
  percentage: number; // <-- Add this line
}

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <span className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg">
      <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      <span className="font-medium">{name}</span>
    </span>
  );
}
