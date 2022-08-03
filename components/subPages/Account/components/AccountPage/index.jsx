import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const AccountDetails = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="container my-20 flex flex-col justify-center">
        <h1 className="text-3xl text-center">Welcome To Bengal Shop</h1>
        <p className="text-center text-lg mt-5">{session.user.name}</p>
        <button
          className="bg-green-two px-4 py-2 text-white w-48 mx-auto mt-10"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="container my-10">
      <h1 cla>You are not signed in</h1>
      <button
        className="bg-green-two px-4 py-2 text-white"
        onClick={() => router.push("/login")}
      >
        Sign In
      </button>
    </div>
  );
};

export default AccountDetails;
