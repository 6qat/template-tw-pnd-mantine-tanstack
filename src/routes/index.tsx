import { Heading } from "@/components/heading";
import { Button } from "@/components/jolly/button";
import { Button as MButton } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { css } from "~/styled-system/css";
import { HStack, VStack } from "~/styled-system/jsx";

export const Route = createFileRoute("/")({
  component: () => <Root />,
});

function Root() {
  const abc = 1;

  return (
    <>
      <div className={css({ fontSize: "4xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <Heading>This is the home page H1.</Heading>
      <Heading variant="h2">This is the home page H2.</Heading>
      <Heading variant="h3">This is the home page H3.</Heading>

      <HStack mt="4" mb="4">
        <Button variant="default" className="mr-2">
          Default
        </Button>
        <Button variant="outline" className="mr-2">
          Outline
        </Button>
        <Button variant="destructive" className="mr-2">
          Destructive
        </Button>
        <Button variant="ghost" className="mr-2">
          Ghost
        </Button>
        <Button variant="secondary" className="mr-2">
          Secondary
        </Button>
        <Button variant="link">Link</Button>
      </HStack>
      <VStack alignItems="flex-start">
        <MButton>Button</MButton>
      </VStack>
    </>
  );
}
