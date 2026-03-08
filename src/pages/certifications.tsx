import { NextSeo } from "next-seo";

import CertificationCard from "@/components/certifications/certification-card";
import { CERTIFICATIONS } from "@/data/certifications";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Certifications() {
  return (
    <>
      <NextSeo
        title="Certifications | Luckwin Subinaya"
        description="View certifications and credentials earned by Luckwin Subinaya, a Full Stack Developer."
        canonical={`${siteMetadata.siteUrl}/certifications`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/certifications`,
          title: "Certifications | Luckwin Subinaya - Full Stack Developer",
          description:
            "Explore professional certifications and credentials earned through continuous learning and development.",
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
              "Certifications, Credentials, Professional Development, Software Developer, Full Stack Developer",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Certifications
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Professional certifications and credentials
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {CERTIFICATIONS.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
