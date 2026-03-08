import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    //<html lang="en" className="dark" style={{ backgroundColor: "#000000" }}>
    <div className="grid-bg min-h-screen">
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />

        <main>{props.children}</main>

        <Footer />
      </div>
    </div>
    //</html>
  );
}
