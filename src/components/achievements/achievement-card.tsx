import { motion } from "framer-motion";

import { classNames } from "@/utility/classNames";
import Corosel from "@/components/utility/corosel";

export interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  level: string;
  images: string[];
}

export default function AchievementCard(props: AchievementCardProps) {
  return (
    <motion.article
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
      className={classNames(
        "overflow-hidden rounded-3xl border border-border bg-background/80 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-zinc-950",
        "flex flex-col",
      )}
    >
      <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <div className="aspect-[2/1] w-full overflow-hidden">
          <Corosel images={props.images} aspectRatio={1.4} />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {props.date}
          </span>
          <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/80 dark:bg-zinc-800">
            {props.level}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
          {props.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground sm:text-base">
          {props.description}
        </p>
      </div>
    </motion.article>
  );
}
