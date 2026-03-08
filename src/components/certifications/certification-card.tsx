import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export interface CertificationCardProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
  credentialUrl?: string;
  badgeUrl?: string;
  certificateImage?: string;
}

export default function CertificationCard(props: CertificationCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {props.title}
            </h3>
            <p className="mt-1 text-sm text-accent">
              {props.organisation.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {props.date} • {props.location}
            </p>
          </div>
          {props.badgeUrl && (
            <div className="relative h-16 w-16 flex-shrink-0">
              <Image
                src={props.badgeUrl}
                alt={props.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-sm text-foreground">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-4">
          <a
            href={props.organisation.href}
            target="_blank"
            className="flex items-center gap-1 text-xs text-accent underline md:text-sm"
          >
            <FiExternalLink className="h-4 w-4" /> Organisation
          </a>
          {props.credentialUrl && (
            <a
              href={props.credentialUrl}
              target="_blank"
              className="flex items-center gap-1 text-xs text-accent underline md:text-sm"
            >
              <FiExternalLink className="h-4 w-4" /> Credential
            </a>
          )}
        </div>
      </div>
      {props.certificateImage && (
        <div className="relative w-full border-t border-accent/20 p-4 sm:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={props.certificateImage}
              alt={`${props.title} Certificate`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
