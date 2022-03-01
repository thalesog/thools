import React from 'react';
import { Box, chakra, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex justify="center" rounded={`xl`} shadow={`sm`} w="full">
        <VStack textAlign="center">
          <Heading fontSize={64} color="brand.100">
            🛠
          </Heading>
          <Box pt={8}>
            <Text fontWeight={`thin`} fontSize={22}>
              WELCOME TO
            </Text>
            <Heading fontSize={64} color="brand.100">
              THOOLS
            </Heading>
          </Box>
          <chakra.span fontSize={22} fontWeight={`thin`} color={`gray.600`}>
            A curated set of tools made to make your life easier.
          </chakra.span>
        </VStack>
      </Flex>
    </Flex>
  );
}
