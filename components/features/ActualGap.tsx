import { useActualGap } from "@/hooks/usePrices";
import { Card, H2, Text } from "tamagui";

export const ActualGap = () => {
  const { data: gapData, isError, isPending } = useActualGap();

  return (
    <Card
      paddingVertical="$4"
      backgroundColor="#006C49"
      position="relative"
      overflow="hidden"
    >
      <Text
        position="absolute"
        right={-10}
        top={-15}
        fontSize={160}
        color="white"
        opacity={0.1}
        fontWeight="bold"
        userSelect="none"
        pointerEvents="none"
      >
        %
      </Text>

      <Card.Header zIndex={1}>
        <Text
          fontSize={10}
          color="#79f9c6ff"
          fontWeight="700"
          letterSpacing={1.2}
        >
          BRECHA CAMBIARIA
        </Text>
      </Card.Header>
      <Card.Footer
        paddingHorizontal="$4"
        display="flex"
        flexDirection="column"
        zIndex={1}
      >
        {isError ? (
          <H2 color="red" fontSize={42} fontWeight="800">
            Ha ocurrido un error al encontrar la brecha actual.
          </H2>
        ) : (
          <>
            <H2 color="white" fontSize={42} fontWeight="800">
              {gapData?.gap.formatted}
            </H2>
            <Text fontSize={12} color="#79f9c6ff" marginTop={6}>
              {gapData?.gap.description}
            </Text>
          </>
        )}
      </Card.Footer>
    </Card>
  );
};
