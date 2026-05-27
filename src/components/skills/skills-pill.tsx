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
      <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
      <span className="font-medium">{name}</span>
    </span>
  );
}
