import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface PageWrapperProps {
  children?: ReactNode;
}

export const PaceWrapper = observer(({ children }: PageWrapperProps) => <Flex justifyContent="center">{children}</Flex>);
