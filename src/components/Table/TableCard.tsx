import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import Router from "next/router";
import { RiRestaurantLine } from "react-icons/ri";
interface TableProps {
  id: string;
  spot: number;
  status: string;
}
export default function TableCard({ id, spot, status }: TableProps) {
  function statusColor(status: string) {
    switch (status) {
      case "ocupado":
        return "red";
      case "livre":
        return "green";
      case "reservado":
        return "brown";
    }
  }

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Stack direction="row" justify="space-between">
          <Stack direction="row" align="center">
            <RiRestaurantLine fontSize="30px" />
            <Heading fontSize={"xl"}>Mesa 1</Heading>
          </Stack>

          <Badge
            px={2}
            py={1}
            color="white"
            bg={statusColor(status)}
            fontWeight={"400"}
          >
            {status}
          </Badge>
        </Stack>

        <Stack align={"center"} justify={"center"} direction={"column"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            {spot} lugares
          </Badge>
        </Stack>

        <Stack mt={8} direction="column" spacing={4}>
          <Button colorScheme="blue">Reservar</Button>
          <Button
            colorScheme="green"
            onClick={() => Router.push(`/table/${id}`)}
          >
            Abrir mesa
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
