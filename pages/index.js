import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { LogoIcon } from "@/styles/icons";

export default function Home() {
  const auth = useAuth();
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
        <Button onClick={(e) => auth.signout()} mt={4} size="sm">
          Sign Out
        </Button>
      ) : (
        <Button onClick={(e) => auth.signinWithGitHub()} mt={4} size="sm">
          Sign In
        </Button>
      )}
    </Flex>
  );
}
