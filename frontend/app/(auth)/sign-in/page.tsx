"use client";
import { useActionState } from "react";
import z from "zod";
import { authSchema, type TAuthFormState } from "@/utils/validationSchemas";
import { actionLogin } from "@/utils/actions";
import Link from "next/link";
import FormInput from "@/components/inputs/FormInput";
import Button from "@/components/buttons/Button";

type TSignInFormFields = Pick<z.infer<typeof authSchema>, "email" | "password">;
export type TSignInFormState = TAuthFormState<TSignInFormFields> | undefined;

const SignInPage = () => {
  const [state, action, isPending] = useActionState(actionLogin, undefined);
  return (
    <div>
      <h2 className="text-[40px] text-black leading-10 font-medium">Sign In</h2>
      <p className="mt-6 text-base leading-4 text-[#6C7275] font-normal">
        Don’t have an accout yet?{" "}
        <Link className="text-[#38CB89] font-semibold" href="/sign-up">
          Sign Up
        </Link>
      </p>
      <form action={action} className="mt-8 flex flex-col gap-8">
        <FormInput<TSignInFormFields>
          placeholder="Email address"
          id="email"
          name="email"
          defaultValue={state?.fields.email || ""}
          error={state?.errors?.email && state.errors.email[0]}
        />
        <FormInput<TSignInFormFields>
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          defaultValue={state?.fields.password || ""}
          error={state?.errors?.password && state.errors.password[0]}
        />
        <Button
          className="inline-block w-full text-base leading-6.5 py-2.5 bg-black text-white font-medium rounded-lg disabled:bg-gray-700"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting" : "Sign In"}
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
