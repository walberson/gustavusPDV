import { Stack, Icon, Button } from "@chakra-ui/react";
import { useContext } from "react";
import {
  RiLogoutBoxLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

export function NotificationNav() {
  return (
    <Stack
      direction="row"
      align="center"
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20"></Icon>
      <Icon as={RiUserAddLine} fontSize="20"></Icon>
    </Stack>
  );
}
