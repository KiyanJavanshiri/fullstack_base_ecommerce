"use client";
import { useActionState } from "react";
import z from "zod";
import { authSchema, type TAuthFormState } from "@/utils/validationSchemas";
import { actionRegister } from "@/utils/actions";
import Link from "next/link";
import FormInput from "@/components/Input/FormInput";
import Button from "@/components/Button/Button";

type TSignUpFormFields = z.infer<typeof authSchema>
export type TSignUpFormState = TAuthFormState<TSignUpFormFields> | undefined;

const SignUpPage = () => {
  const [state, action, isPending] = useActionState(actionRegister, undefined);
  return (
    <div>
      <h2 className="text-[40px] text-black leading-10 font-medium">Sign Up</h2>
      <p className="mt-6 text-base leading-4 text-[#6C7275] font-normal">
        Already have an account?{" "}
        <Link className="text-[#38CB89] font-semibold" href="/sign-in">
          Sign In
        </Link>
      </p>
      <form action={action} className="mt-8 flex flex-col gap-8">
        <FormInput<TSignUpFormFields>
          placeholder="Your name"
          id="name"
          name="name"
          defaultValue={state?.fields.name || ""}
          error={state?.errors?.name && state.errors.name[0]}
        />
        <FormInput<TSignUpFormFields>
          placeholder="Username"
          id="username"
          name="username"
          defaultValue={state?.fields.username || ""}
          error={state?.errors?.username && state.errors.username[0]}
        />
        <FormInput<TSignUpFormFields>
          placeholder="Email address"
          id="email"
          name="email"
          defaultValue={state?.fields.email || ""}
          error={state?.errors?.email && state.errors.email[0]}
        />
        <FormInput<TSignUpFormFields>
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
          {isPending ? "Submitting" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
