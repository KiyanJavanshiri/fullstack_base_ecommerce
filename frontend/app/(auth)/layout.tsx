import Logo from "@/components/Logo";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:gap-22 md:grid-cols-2">
      <div className="relative w-full min-h-107.5 md:h-screen md:max-w-175 justify-self-start">
        <div className="absolute left-1/2 top-8 -translate-x-1/2 z-1">
          <Logo />
        </div>
        <Image
          src="/images/authBg.jpg"
          alt="auth screen bg"
          priority
          fill
          className="object-cover"
        />
      </div>
      <section className="px-8 md:pl-0 pb-10 md:pb-0 w-full md:max-w-122">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout