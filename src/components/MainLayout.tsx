import React, { ReactNode } from 'react';
import {
  chakra,
  HStack,
  Link,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Text,
  Center,
} from '@chakra-ui/react';

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaCode, FaMoon, FaSun } from 'react-icons/fa';
import Head from 'next/head';
import NavLink from '@/components/NavLink';
import { Icon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function MainLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue(`dark`, `light`);
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue(`white`, `gray.800`);
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? `flex` : `none`}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

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
      <chakra.header
        shadow={`sm`}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <VStack cursor={`pointer`} onClick={() => router.push(`/`)}>
                <Icon as={FaCode} boxSize={6} color={`brand.300`} />
                <Text fontWeight={`bold`} color={`brand.50`}>
                  THOOLS
                </Text>
              </VStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: `none`, md: `flex` }}>
                <Button
                  size={`sm`}
                  variant="ghost"
                  onClick={() => router.push(`/xjsparser`)}
                >
                  Text Parser
                </Button>
              </HStack>
              <IconButton
                display={{ base: `flex`, md: `none` }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue(`gray.800`, `inherit`)}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>

      {children}
    </Box>
  );
}
