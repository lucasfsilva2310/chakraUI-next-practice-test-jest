import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4","4,","6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

          <Link href="/users/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="18"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar Novo
            </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4,","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8">{/*Edit Button */}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4,","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4","4,","6"]}>
                  <Text fontWeight="bold">Lucas Silva</Text>
                  <Text fontSize="small">lucasfsilva2310@gmail.com</Text>
                </Td>
               {isWideVersion &&  <Td px={["4","4,","6"]}>26 de Janeiro, 2022</Td>}
                <Td px={["4","4,","6"]}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
