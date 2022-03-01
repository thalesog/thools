import CodeBlock from '@/components/CodeBlock';
import {
  Text,
  Button,
  Center,
  Heading,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [currentText, setCurrentText] = useState(`{}`);
  const [currentLanguage, setCurrentLanguage] = useState<`javascript` | 'xml'>(
    `javascript`,
  );

  const parseClipboardAsXML = () => {
    console.log(`XMLZANDO`);
    navigator.clipboard.readText().then((text) => {
      setCurrentText(text);
      setCurrentLanguage(`xml`);
    });
  };
  const parseClipboardAsJSON = () => {
    console.log(`JSONZANDO`);
    navigator.clipboard.readText().then((text) => {
      setCurrentText(text);
      setCurrentLanguage(`javascript`);
    });
  };

  return (
    <VStack flexDirection={`column`} spacing={4}>
      <Heading fontWeight={`thin`} fontSize={22}>
        FORMATAR
        <Divider />
      </Heading>
      <HStack w={64}>
        <Button w={`full`} colorScheme={`brand`} onClick={parseClipboardAsJSON}>
          JSON
        </Button>
        <Button w={`full`} colorScheme={`brand`} onClick={parseClipboardAsXML}>
          XML
        </Button>
      </HStack>
      {currentText !== `{}` && (
        <>
          <Divider />
          <Text>Código formatado:</Text>
          <CodeBlock code={currentText} language={currentLanguage} />
        </>
      )}
    </VStack>
  );
};

export default Home;
