import { Box, Flex, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";

import { useState } from "react";
import { RiAddFill } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import TableCard from "../../components/Table/TableCard";
import { api } from "../../services/api";
import { useQuery } from "react-query";

interface TableProps {
  id: string;
  spot: number;
  status: string;
}

export default function Table() {
  const { isLoading, error, data } = useQuery("tables", () =>
    api.get("/tables")
  );
  const tables: TableProps[] = data?.data;

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        {isLoading ? (
          <Flex justify="center">
            <Spinner></Spinner>
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Falha ao obter dados dos usuários.</Text>
          </Flex>
        ) : (
          <SimpleGrid flex="1" gap="3" columns={3} minChildWidth="240px">
            <Stack
              boxShadow={"2xl"}
              rounded={"lg"}
              align="center"
              justify="center"
            >
              <RiAddFill size="100px" />
            </Stack>
            {tables.map((tables) => (
              <TableCard
                key={tables.id}
                spot={tables.spot}
                status={tables.status}
                id={tables.id}
              />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
