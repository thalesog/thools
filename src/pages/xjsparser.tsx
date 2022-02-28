import CodeBlock from '@/components/CodeBlock';
import { Box, Button, HStack } from '@chakra-ui/react';
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
    <Box>
      <HStack>
        <Button onClick={parseClipboardAsJSON}>JSON/JS</Button>
        <Button onClick={parseClipboardAsXML}>XML</Button>
      </HStack>
      <CodeBlock code={currentText} language={currentLanguage} />
    </Box>
  );
};

export default Home;
