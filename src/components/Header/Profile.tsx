import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { useContext } from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  const user = {
    username: "Walberson",
    email: "walberson@gmail.com",
    avatar_url: "Walberson",
  };

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user?.username}</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <Avatar size="md" name={user?.username} src={user?.avatar_url} />
    </Flex>
  );
}
