import Head from "next/head";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>R2025</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>r2025</h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        {!auth?.user && (
          <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
        )}
        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        )}
      </main>
    </div>
  );
}
