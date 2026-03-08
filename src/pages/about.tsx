import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <main>
      <NextSeo
        title="About Luckwin Subinaya | Full Stack Developer"
        description="Explore the portfolio of Luckwin Subinaya, a passionate Software Developer with experience in building high-performance, user-focused web applications. Discover skills, projects, and a commitment to creating impactful digital solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Luckwin Subinaya - Full Stack Developer",
          description:
            "Discover Luckwin Subinaya, an aspiring Software Developer focused on modern web development, performance-driven design, and building clean, user-friendly digital experiences.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
              alt: "Luckwin Subinaya - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />

      <AboutHero />

      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />

      <ExperienceShowcaseList title="Education" details={EDUCATION} />

      {/* Resume Section */}
      <div className="relative mt-16 flex items-center justify-center">
        <div className="floating-resume w-full max-w-3xl rounded-xl border border-border bg-background/80 px-8 py-8 text-center shadow-lg backdrop-blur-lg">
          <span className="text-xl font-bold text-yellow-100 md:text-2xl">
            Checkout my Resume !
          </span>

          <p className="mt-6 text-base md:text-xl">
            <a
              href="/Luckwin_Subinaya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
            >
              View my resume
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28"></div>
    </main>
  );
}
