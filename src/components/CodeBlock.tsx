import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { chakra, ChakraProps, Code } from '@chakra-ui/react';

const parseCode = (code: string) => {
  try {
    return JSON.stringify(JSON.parse(code), null, 4);
  } catch {
    return code;
  }
};

export default function CodeBlock({
  code,
  language,
  ...props
}: { code: string; language: 'javascript' | 'xml' } & ChakraProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <chakra.pre {...props} minW={`80vw`} rounded={`xl`} shadow={`sm`}>
      <Code className={`language-${language}`}>{parseCode(code)}</Code>
    </chakra.pre>
  );
}
