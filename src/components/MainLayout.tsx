import React, { ReactNode } from 'react';
import {
  chakra,
  HStack,
  Box,
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Text,
} from '@chakra-ui/react';
import { FaCode } from 'react-icons/fa';
import Head from 'next/head';
import { Icon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function MainLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const bg = useColorModeValue(`white`, `gray.800`);

  return (
    <Box>
      <Head>
        <title>THOOLS</title>
        <meta
          name="description"
          content="Set of tools created by developers to developers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <chakra.header shadow={`sm`} bg={bg} w="full" overflowY="hidden">
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <HStack cursor={`pointer`} onClick={() => router.push(`/`)}>
                <Icon as={FaCode} boxSize={6} color={`brand.300`} />
                <Text fontWeight={`bold`} color={`brand.50`}>
                  THOOLS
                </Text>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5">
                <Button
                  size={`xs`}
                  variant="ghost"
                  onClick={() => router.push(`/xjsparser`)}
                  bgColor={
                    router.asPath === `/xjsparser` ? `brand.900` : undefined
                  }
                  colorScheme={`brand`}
                >
                  FORMATTER
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>

      {children}
    </Box>
  );
}
