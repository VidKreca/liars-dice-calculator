import { observer } from "mobx-react-lite";
import { useState } from "react";
import {
  Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text
} from "@chakra-ui/react";
import { CalculatorStore } from "../stores";
import { CountInput, Dice } from "../components";
import { FormatNumber } from "../utils";

export const CalculatorPage = observer(() => {
  const [store] = useState(() => new CalculatorStore());

  return (
    <Flex justifyContent="center">
      <Flex direction="column" justifyContent="center" alignItems="center" padding="24px" gap="24px">
        <Text fontSize="4xl">Liar&apos;s Dice Calculator</Text>

        <Flex direction="column">
          <Text fontSize="lg">Total dice on the table</Text>

          <NumberInput min={0} value={store.total} onChange={(_, value) => store.setTotal(value)}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>

        <Flex direction="column">
          <Text fontSize="lg">My own dice</Text>
          <CountInput value={store.own} total={store.total} onChange={(side, value) => store.setOwn(side, value)} />
        </Flex>

        <Flex direction="column">
          <Text fontSize="2xl">Assuming even distribution</Text>

          <Flex gap="16px" alignItems="center">
            <Dice side={1} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[1])} on the table`}</Text>
          </Flex>
          <Flex gap="16px" alignItems="center">
            <Dice side={2} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[2])} on the table`}</Text>
          </Flex>
          <Flex gap="16px" alignItems="center">
            <Dice side={3} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[3])} on the table`}</Text>
          </Flex>
          <Flex gap="16px" alignItems="center">
            <Dice side={4} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[4])} on the table`}</Text>
          </Flex>
          <Flex gap="16px" alignItems="center">
            <Dice side={5} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[5])} on the table`}</Text>
          </Flex>
          <Flex gap="16px" alignItems="center">
            <Dice side={6} />
            <Text fontSize="xl">{`${FormatNumber(store.probableCounts[6])} on the table`}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
