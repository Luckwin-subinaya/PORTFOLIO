import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-8 bg-transparent px-2 py-2 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 rounded-2xl bg-accent p-3 text-background sm:p-4 md:gap-3 lg:p-5">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-2 py-0.5 text-xs font-semibold uppercase text-accent">
            contact
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="cursor-pointer text-center text-base font-bold underline sm:text-lg lg:text-xl"
        >
          <span>luckwinsubinayars@gmail.com</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 text-center lg:mx-auto lg:max-w-7xl">
        <div className="flex gap-4">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
