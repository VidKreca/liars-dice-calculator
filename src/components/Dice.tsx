import { observer } from "mobx-react-lite";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { Side } from "../stores";

interface DiceProps {
  side: Side;
}

export const Dice = observer(({ side }: DiceProps) => {
  if (side === 1) {
    return <Wrapper justifyContent="center" alignItems="center"><Dot /></Wrapper>;
  }

  if (side === 2) {
    return (
      <Wrapper justifyContent="space-between">
        <Dot />
        <Dot alignSelf="end" />
      </Wrapper>
    );
  }

  if (side === 3) {
    return (
      <Wrapper justifyContent="space-between">
        <Dot />
        <Dot alignSelf="center" />
        <Dot alignSelf="end" />
      </Wrapper>
    );
  }

  if (side === 4) {
    return (
      <Wrapper direction="column" justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
        </Flex>
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
        </Flex>
      </Wrapper>
    );
  }

  if (side === 5) {
    return (
      <Wrapper direction="column" justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
        </Flex>
        <Flex justifyContent="center">
          <Dot />
        </Flex>
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
        </Flex>
      </Wrapper>
    );
  }

  if (side === 6) {
    return (
      <Wrapper direction="column" justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
          <Dot />
        </Flex>
        <Flex justifyContent="space-between">
          <Dot />
          <Dot />
          <Dot />
        </Flex>
      </Wrapper>
    );
  }

  return null;
});

function Dot(props: FlexProps) {
  return <Flex {...props} backgroundColor="white" width="8px" height="8px" borderRadius="50%" />;
}

function Wrapper(props: FlexProps) {
  return (
    <Flex
      {...props}
      margin="16px"
      padding="16px"
      width="64px"
      height="64px"
      boxShadow="inset 0 5px white,
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7"
      borderRadius="10%"
      objectFit="contain"
    />
  );
}
