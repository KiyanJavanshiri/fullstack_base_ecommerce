import { actionLogout, actionGetSession } from "@/utils/actions";
import Link from "next/link";
import Button from "@/components/buttons/Button";

const AuthButtons = async () => {
  const session = await actionGetSession();

  return (
    <div className="hidden md:flex justify-center items-center gap-x-4">
      {!session ? (
        <>
          <Link
            className="text-black text-sm leading-6 font-medium px-3 py-1 rounded-sm "
            href={"/sign-up"}
          >
            Sign Up
          </Link>
          <Link
            className="text-white text-sm leading-6 font-medium px-3 py-1 rounded-sm bg-black"
            href={"/sign-in"}
          >
            Login
          </Link>
        </>
      ) : (
        <form action={actionLogout}>
          <Button
            className="text-white text-sm leading-6 font-medium px-3 py-1 rounded-sm bg-black"
            type="submit"
          >
            Logout
          </Button>
        </form>
      )}
    </div>
  );
};

export default AuthButtons