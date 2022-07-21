import { Flex, Button, Icon, VisuallyHidden, View, Text, useTheme } from '@aws-amplify/ui-react';
import { Box } from '@/components/Box';
import { Swatch } from '@/components/Swatch';
import { ColorsTable } from './';
import { MdMoreHoriz } from 'react-icons/md';
import {  createTokenList } from './utils';

interface ColorsProps {
  colorGroup: string;
  children: React.ReactNode;
}

export const Colors = ({colorGroup}: ColorsProps) => {
  const colors = useTheme().tokens.colors[colorGroup];
  const tokenList =  createTokenList(colors)
  return (
    <Box size="medium" maxWidth="600px" className="color">
      <a href="/">Test</a>
      <Flex alignItems="center">
        <Text fontWeight="bold">{ colorGroup }</Text>
        <Button variation="link" size="small" marginInlineStart="auto">
          <VisuallyHidden>{colorGroup} Settings</VisuallyHidden>
          <Icon height="large" ariaLabel="" as={MdMoreHoriz} />
        </Button>
      </Flex>
    
      <Flex gap="xl">
        <View flex="0 0 200px">
          <Flex direction="column">
            <Swatch initialColor={tokenList[3].value} size="large" ></Swatch>
            
          </Flex>
        </View>
        
        <View flex="0 0 auto">
          <ColorsTable items={tokenList} />
        </View>
      </Flex>
        
      
    </Box>
  )
}