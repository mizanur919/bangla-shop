import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
const LoginDetails = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    return (
      <div className="container my-10">
        <p>You are not signed in</p>
        <button
          className="bg-green-two px-4 py-2 text-white"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );
  }
  return (
    <div className="container my-10">
      <button
        className=" bg-green-two px-4 py-2 text-white"
        onClick={() => router.push("/account")}
      >
        Go To Account
      </button>
    </div>
  );
};

export default LoginDetails;
