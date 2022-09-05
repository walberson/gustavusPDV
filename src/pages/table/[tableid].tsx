import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { RiAddFill, RiCloseFill } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import TableCard from "../../components/Table/TableCard";

export default function Table() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Stack w="full" direction={{ base: "column", lg: "row" }}>
          <Stack
            borderRadius="md"
            boxShadow="20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;"
            bgColor="white"
            p="4"
            w={{ base: "100%", lg: "60%" }}
          >
            <Tabs>
              <TabList>
                <Tab>Pizzas</Tab>
                <Tab>Bebidas</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Grid>
                    <Box></Box>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
          <Stack direction="column" w={{ base: "100%", lg: "40%" }}>
            <Stack
              borderRadius="md"
              boxShadow="20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;"
              bgColor="white"
              p="4"
              overflowY="auto"
            >
              <Stack direction="row" justify="space-between" align="center">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <IconButton
                  size="sm"
                  colorScheme="red"
                  icon={<RiCloseFill />}
                  aria-label={""}
                />
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
              <Stack direction="row" justify="space-between">
                <Box>
                  <Heading size="md">Pizza de Calabresa</Heading>
                </Box>
                <Text>01</Text>
                <Text>R$ 50,00</Text>
                <Text>X</Text>
              </Stack>
            </Stack>
            <Stack
              h="30%"
              p="4"
              borderRadius="md"
              boxShadow="20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;"
              bgColor="white"
              justify="center"
            >
              <Stack direction="row" align="center" justify="space-between">
                <Heading size="md">Produto</Heading>
                <Text>500 R$</Text>
              </Stack>
              <Stack direction="row" align="center" justify="space-between">
                <Heading size="md">Desconto</Heading>
                <Text>50%</Text>
                <Text>50 R$</Text>
              </Stack>
              <Stack direction="row" align="center" justify="space-between">
                <Heading size="md">Total</Heading>
                <Text>450 R$</Text>
              </Stack>
              <Stack direction="row" align="center" justify="space-evenly">
                <Button colorScheme="red">Cancelar tudo</Button>
                <Button colorScheme="blue">Emitir Nota</Button>
                <Button colorScheme="green">Pagar Conta</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
