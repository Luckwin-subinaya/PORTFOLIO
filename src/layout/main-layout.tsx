import { ReactNode } from "react";
import localFont from "next/font/local";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="grid-bg min-h-screen">
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
