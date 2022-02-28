import React from 'react';
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { base } from 'next/dist/build/webpack/config/blocks/base';

export default function Home() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex justify="center" rounded={`xl`} shadow={`sm`} w="full">
        <chakra.span
          textAlign="center"
          fontSize={{ base: `3xl`, sm: `4xl` }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color={useColorModeValue(`gray.900`, `gray.100`)}
          mb={6}
        >
          <chakra.span display="block">Welcome to THOOLS</chakra.span>
          <chakra.span
            display="block"
            fontSize={22}
            color={useColorModeValue(`brand.600`, `gray.500`)}
          >
            A curated set of tools made to make your life easier.
          </chakra.span>
        </chakra.span>
      </Flex>
    </Flex>
  );
}
