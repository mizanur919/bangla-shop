import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillGoogleCircle } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
const LoginDetails = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    return (
      <div className="container my-20 text-center">
        <h1 className="text-4xl mb-20">Log In</h1>
        <button
          className="bg-green-two px-4 py-2 text-white"
          onClick={() => signIn()}
        >
          <span className="flex gap-5 items-center py-2">
            <AiFillGoogleCircle className="text-2xl" />
            Continue With Google
          </span>
        </button>
      </div>
    );
  }
  return (
    <div className="container my-10 text-center">
      <button
        className="bg-green-two px-4 py-2 text-white"
        onClick={() => router.push("/account")}
      >
        <span className="flex gap-5 items-center py-2 px-3">
          Go To Account
          <HiArrowNarrowRight className="text-2xl" />
        </span>
      </button>
    </div>
  );
};

export default LoginDetails;
