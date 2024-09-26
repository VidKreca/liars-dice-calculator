import { observer } from "mobx-react-lite";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Counts, Side } from "../stores";
import { Dice } from "./Dice";

interface CountInputProps {
  value: Counts;
  total: number
  onChange: (side: Side, value: number) => void
}

export const CountInput = observer(({ value, total, onChange }: CountInputProps) => {
  const getMax = (side: Side) => {
    const otherDiceSum = Object.entries(value).reduce((sum, [currentSide, count]) => {
      if (currentSide === side.toString()) return sum;
      return sum + count;
    }, 0);

    return total - otherDiceSum;
  };

  const handleReset = () => {
    onChange(1, 0);
    onChange(2, 0);
    onChange(3, 0);
    onChange(4, 0);
    onChange(5, 0);
    onChange(6, 0);
  };

  return (
    <Flex direction="column" alignItems="center" gap="32px">
      <Flex gap="24px">
        <UpDown side={1} value={value[1]} max={getMax(1)} onChange={(count) => onChange(1, count)} />
        <UpDown side={2} value={value[2]} max={getMax(2)} onChange={(count) => onChange(2, count)} />
        <UpDown side={3} value={value[3]} max={getMax(3)} onChange={(count) => onChange(3, count)} />
        <UpDown side={4} value={value[4]} max={getMax(4)} onChange={(count) => onChange(4, count)} />
        <UpDown side={5} value={value[5]} max={getMax(5)} onChange={(count) => onChange(5, count)} />
        <UpDown side={6} value={value[6]} max={getMax(6)} onChange={(count) => onChange(6, count)} />
      </Flex>

      <Text cursor="pointer" userSelect="none" onClick={handleReset}>Reset</Text>
    </Flex>
  );
});

interface UpDownProps {
  side: Side
  value: number
  max: number
  onChange: (value: number) => void
}

const UpDown = observer(({
  side, value, max, onChange
}: UpDownProps) => (
  <Flex direction="column" alignItems="center" gap="8px">
    <IconButton aria-label="Count up" icon={<ArrowUpIcon />} onClick={() => value + 1 <= max && onChange(value + 1)} />
    <Dice side={side} />
    <Text>{value}</Text>
    <IconButton aria-label="Count down" icon={<ArrowDownIcon />} onClick={() => value - 1 >= 0 && onChange(value - 1)} />
  </Flex>
));
