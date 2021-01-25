import Head from "next/head";
import { Avatar, Button, Flex } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { LogoIcon } from "@/styles/icons";

export default function Home() {
  const auth = useAuth();
  console.log({ user: auth.user });
  return (
    <Flex
      as="main"
      direction="column"
      w="full"
      h="100vh"
      align="center"
      justify="center"
    >
      <Head>
        <title>R2025</title>
      </Head>

      <LogoIcon color="black" boxSize="48px" />

      {auth.user ? (
        <>
          <Avatar size="sm" src={auth.user?.photoUrl} name={auth.user?.name} />
          <Button onClick={(e) => auth.signout()} mt={4} size="sm">
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Button onClick={(e) => auth.signinWithGitHub()} mt={4} size="sm">
            Sign In with GitHub
          </Button>
          <Button onClick={(e) => auth.signinWithGoogle()} mt={4} size="sm">
            Sign In with Google
          </Button>
        </>
      )}
    </Flex>
  );
}
