import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Silva</Text>
        <Text color="gray.300" fontSize="small">
          lucasfsilva2310@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Silva"
        src="http://github.com/lucasfsilva2310.png"
      />
    </Flex>
  );
}
