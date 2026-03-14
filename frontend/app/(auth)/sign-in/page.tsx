import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
import FormInput from "@/components/Input/FormInput";

const SignInPage = () => {
  return (
    <section className="pb-10 h-screen flex flex-col gap-10 md:flex-row md:gap-22">
      <div className="relative h-107.5 md:h-screen">
        <div className="absolute left-1/2 top-8 -translate-x-1/2 z-1">
          <Logo />
        </div>
        <Image
          src="/images/authBg.jpg"
          alt="auth screen bg"
          priority
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="px-8 md:p-0">
        <h2 className="text-[40px] text-black leading-10 font-medium">
          Sign In
        </h2>
        <p className="mt-6 text-base leading-4 text-[#6C7275] font-normal">
          Don’t have an accout yet?{" "}
          <Link className="text-[#38CB89] font-semibold" href="/sign-up">
            Sign Up
          </Link>
        </p>
        <form className="mt-8 flex flex-col gap-8">
          <FormInput placeholder="Email address" id="email" name="email" />
          <FormInput placeholder="Password" id="password" name="password" type="password"/>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
