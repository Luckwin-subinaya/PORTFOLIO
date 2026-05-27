import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import AchievementCard from "@/components/achievements/achievement-card";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { ACHIEVEMENTS, type AchievementCategory } from "@/data/achievements";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const achievementTabs: { key: AchievementCategory; label: string }[] = [
  { key: "Hackathons & Symposium", label: "Hackathons & Symposium" },
  { key: "Sports", label: "Sports" },
  { key: "Events Organised", label: "Events Organised" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<AchievementCategory>(
    achievementTabs[0].key,
  );

  const filteredAchievements = useMemo(
    () => ACHIEVEMENTS.filter((item) => item.category === activeTab),
    [activeTab],
  );

  const [selectedDetail, setSelectedDetail] = useState<
    "internship" | "freelancing" | null
  >(null);

  const detailItems = {
    internship: {
      title: "Web Development Internship",
      summary:
        "During the internship, I worked on developing and enhancing user-facing application modules, improving frontend responsiveness, integrating backend APIs, and implementing reusable component-based architecture.",
      description:
        "Worked as a Full-Stack Development Intern contributing to modern web application development with a strong focus on frontend engineering, responsive UI design, performance optimization, and scalable architecture. Collaborated with the development team to build production-ready features, improve user experience, and optimize application workflows for better performance and maintainability.",
      company: "Flyers soft Pvt Ltd (Chennai)- Full Stack Development Team",
      projectIdea:
        "Develop a scalable Client-Project-Resource Management System to streamline client handling, project tracking, and intelligent employee resource allocation using modern MERN stack technologies with Next.js.",
      implementation: `Built responsive and dynamic frontend interfaces using Next.js, React.js, and Tailwind CSS. Developed reusable UI components following component-driven architecture. Integrated RESTful APIs for client, project, and resource management. Implemented JWT-based authentication and role-based access control. Optimized application performance through API refinement, code splitting, and frontend optimization. Designed interactive dashboards with real-time data visualization. Contributed to automated resource allocation logic based on tech stack compatibility, budget constraints, and employee availability. Collaborated using Git workflows, Agile methodologies, and deployment preparation practices.`,
      tools: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
      ],
      imageSrc: "/images/projects/clientpage.png",
      demoHref:
        "https://drive.google.com/file/d/1spyYv8s0Cdk67rvNipKPv2bxPU7-0kf4/view?usp=drive_link",
      githubHref:
        "https://github.com/Luckwin-subinaya/Client-Project_Resource.git",
    },
    freelancing: {
      title: "Freelance Web Development Project",
      summary:
        "Developed a full-stack gym management platform with powerful admin functionalities for managing members, generating invoices, and automating WhatsApp notifications. The system was designed to streamline gym operations, improve member management efficiency, and automate recurring billing workflows.",
      description:
        "Built a modern gym management website that allows administrators to manage gym members, track subscriptions, generate invoices dynamically, and automatically send billing notifications to members through WhatsApp integration.",
      company: "V-Strong Fitness (Client) - Freelance Project",
      projectIdea:
        "Create conversion-focused landing pages and portfolio sites tailored to client branding and SEO goals.",
      implementation:
        "Developed responsive frontend interfaces using Next.js and React.js Built secure backend services with Node.jsDesigned database models and relationships using Prisma ORM with MongoDBImplemented admin dashboard for managing gym members and subscriptions Created invoice generation system for monthly membership billing Automated WhatsApp invoice delivery using Twilio API Developed CRUD operations for member management and subscription management",
      tools: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Prisma ORM",
        "Twilio API",
        "Git",
      ],
      imageSrc: "/images/projects/gym2.png",
      demoHref: "https://vstrongfitness.in/",
      githubHref: "https://github.com/Luckwin-subinaya/freelance-projects",
    },
  } as const;

  const activeDetail = selectedDetail ? detailItems[selectedDetail] : null;

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

      <section className="mx-auto mb-20 max-w-6xl px-6 sm:px-14 md:px-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
            Internship & Freelancing
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground xs:text-4xl sm:text-5xl">
            Real-world experience before achievements
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-zinc-950">
            <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
              Internship
            </p>
            <div className="mt-4 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-950">
              <Image
                src="/images/projects/clientpage.png"
                alt="Internship preview"
                width={1200}
                height={700}
                className="h-44 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Web Development Intern
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Worked on frontend features, responsive layouts, and code quality
              improvements for client-facing applications.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                Duration: jun 2025 - jul 2025
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                Company: Flyers soft Pvt Ltd (Chennai)
              </p>
              <button
                type="button"
                onClick={() => setSelectedDetail("internship")}
                className="rounded-full border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
              >
                View details
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-zinc-950">
            <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
              Freelancing
            </p>
            <div className="mt-4 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-950">
              <Image
                src="/images/projects/gym2.png"
                alt="Freelance project preview"
                width={1200}
                height={700}
                className="h-44 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Freelance Web Projects
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Delivered polished gym website and admin pages,functionalities and
              focused on frontend development, performance, and maintainable
              CSS.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                Duration: Dec 2024 - jan 2025
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                Company: Freelancer (V -Strong Fitness)
              </p>
              <button
                type="button"
                onClick={() => setSelectedDetail("freelancing")}
                className="rounded-full border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
              >
                View details
              </button>
            </div>
          </div>
        </div>
        <Transition appear show={selectedDetail !== null} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => setSelectedDetail(null)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl border border-accent/20 bg-background p-6 text-left align-middle shadow-2xl transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Dialog.Title className="text-2xl font-semibold text-foreground">
                          {activeDetail?.title}
                        </Dialog.Title>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {activeDetail?.summary}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-accent/5"
                        onClick={() => setSelectedDetail(null)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="mt-6 space-y-5">
                      <p className="text-sm leading-7 text-muted-foreground">
                        {activeDetail?.description}
                      </p>

                      {activeDetail?.company ? (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            Company
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {activeDetail.company}
                          </p>
                        </div>
                      ) : null}

                      {activeDetail?.projectIdea ? (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            Project idea
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {activeDetail.projectIdea}
                          </p>
                        </div>
                      ) : null}

                      {activeDetail?.implementation ? (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            Implementation
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {activeDetail.implementation}
                          </p>
                        </div>
                      ) : null}

                      {activeDetail?.tools ? (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            Tools used
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {activeDetail.tools.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {activeDetail?.imageSrc ? (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            Sample preview
                          </h4>
                          <div className="mt-3 overflow-hidden rounded-2xl bg-zinc-100">
                            <Image
                              src={activeDetail.imageSrc}
                              alt={`${activeDetail.title} preview`}
                              width={1600}
                              height={900}
                              className="h-44 w-full object-cover"
                            />
                          </div>
                        </div>
                      ) : null}

                      <div className="grid gap-3 sm:grid-cols-3">
                        <a
                          href={activeDetail?.demoHref}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:bg-accent/15 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent transition"
                        >
                          Live Demo
                        </a>
                        <a
                          href={activeDetail?.githubHref}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-accent/20 bg-foreground/5 px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:bg-foreground/10 dark:bg-zinc-900"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>

      <section className="mx-auto my-36 max-w-6xl px-6 sm:px-14 md:my-60 md:px-20">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
            Achievements
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground xs:text-4xl sm:text-5xl">
            Key achievements that shaped my journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {
              "A selection of presentations, contests, and hackathons that sharpened my problem-solving, research, and teamwork skills."
            }
          </p>
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {achievementTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-transparent text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mb-10 text-center text-sm text-muted-foreground">
          Showing {filteredAchievements.length} result
          {filteredAchievements.length === 1 ? "" : "s"} for “{activeTab}”
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredAchievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </section>

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
