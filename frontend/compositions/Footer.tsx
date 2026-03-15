import { PATHS, SOCIAL_LINKS } from "@/utils/links";
import Container from "@/layout/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#232627] md:pt-20">
      <Container>
        <div>
          <div className="flex flex-col gap-y-10 items-center md:flex-row md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center">
              <h2 className="text-2xl leading-6 text-white font-medium">
                K-Shop
              </h2>
              <div className="inline-block h-px w-6 bg-[#6C7275] md:h-6 md:w-px"></div>
              <p className="capitalize text-sm leading-5.5 text-[#E8ECEF]">
                Gift & Decoration Store
              </p>
            </div>
            <nav>
              <ul className="flex justify-center items-center flex-col gap-8 md:flex-row md:gap-10">
                {PATHS.map(({ title, path }, i) => (
                  <li key={i}>
                    <Link
                      className="text-sm leading-5.5 text-[#E8ECEF]"
                      href={path}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 md:mt-12.5 pt-6 md:pt-4 border-t border-[#6C7275] flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between">
            <div className="flex justify-center items-center gap-x-6">
              {SOCIAL_LINKS.map(({ Icon, path }, i) => (
                <Link href={path} key={i}>
                  <Icon className="w-6 h-6 text-white" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-7 md:flex-row-reverse">
              <div className="flex justify-center items-center gap-x-7">
                <p className="text-[12px] leading-5 text-white font-semibold">
                  Privacy Policy
                </p>
                <p className="text-[12px] leading-5 text-white font-semibold">
                  Terms of Use
                </p>
              </div>
              <p className="text-[12px] leading-5 text-[#6C7275] font-semibold">
                Copyright © {new Date().getFullYear()} K-Shop. All rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;