import Link from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => any;
} & ChakraLinkProps;

export default function NavLink({
  href,
  children,
  onClick = undefined,
  ...props
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink onClick={onClick} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
}
