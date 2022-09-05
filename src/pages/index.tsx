import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box
            p={["6", "8"]}
            bg="blue.100"
            borderRadius="8"
            height="fit-content"
          >
            <Text fontSize="lg" mb="4">
              Inscritos na semana
            </Text>
          </Box>
          <Box
            p={["6", "8"]}
            bg="blue.100"
            borderRadius="8"
            height="fit-content"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
