import { Card, H2, Text } from "tamagui";

export const ActualGap = () => {
  return (
    <Card
      paddingVertical="$4"
      backgroundColor="#006C49"
      position="relative"
      overflow="hidden"
    >
      {/* Marca de agua de porcentaje */}
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
        <H2 color="white" fontSize={42} fontWeight="800">
          7.42%
        </H2>
        <Text fontSize={12} color="#79f9c6ff" marginTop={6}>
          Divergencia Detectada
        </Text>
      </Card.Footer>
    </Card>
  );
};
