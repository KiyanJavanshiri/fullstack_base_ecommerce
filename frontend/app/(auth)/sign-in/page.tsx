"use client";
import { useActionState } from "react";
import z from "zod";
import { authSchema, type TAuthFormState } from "@/utils/validationSchemas";
import Link from "next/link";
import FormInput from "@/components/Input/FormInput";
import Button from "@/components/Button/Button";

type TSignInFormFields = Pick<z.infer<typeof authSchema>, "email" | "password">;

const SignInPage = () => {
  return (
    <div>
      <h2 className="text-[40px] text-black leading-10 font-medium">Sign In</h2>
      <p className="mt-6 text-base leading-4 text-[#6C7275] font-normal">
        Don’t have an accout yet?{" "}
        <Link className="text-[#38CB89] font-semibold" href="/sign-up">
          Sign Up
        </Link>
      </p>
      <form className="mt-8 flex flex-col gap-8">
        <FormInput<TSignInFormFields>
          placeholder="Email address"
          id="email"
          name="email"
        />
        <FormInput<TSignInFormFields>
          placeholder="Password"
          id="password"
          name="password"
          type="password"
        />
        <Button className="inline-block w-full text-base leading-6.5 py-2.5 bg-black text-white font-medium rounded-lg">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
