import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  useRadioGroup,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CustomRadio } from '../shared/CustomRadio';

export function TradingInterface({ tokenSymbol = 'TOKEN' }) {
  const [amount, setAmount] = useState('');
  const toast = useToast();
  
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'action',
    defaultValue: 'buy',
  });

  const group = getRootProps();
  const options = ['buy', 'sell'];

  const handleTrade = () => {
    // Handle trade execution here
    toast({
      title: 'Trade Executed',
      description: `Successfully placed ${group.value} order for ${amount} ${tokenSymbol}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleQuickAmount = (value) => {
    setAmount(value);
  };

  return (
    <Box
      bg="darkBg.800"
      p={6}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="darkBg.700"
    >
      {/* Buy/Sell Toggle */}
      <HStack {...group} spacing={4} mb={6}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <CustomRadio key={value} {...radio}>
              {value.toUpperCase()}
            </CustomRadio>
          );
        })}
      </HStack>

      {/* Amount Input */}
      <VStack spacing={4} align="stretch">
        <Text fontSize="sm" color="gray.400">
          Amount (SOL)
        </Text>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          bg="darkBg.900"
          border="none"
          _focus={{ ring: 1, ringColor: 'pastelGreen.400' }}
        />

        {/* Quick Amount Buttons */}
        <Flex gap={2} wrap="wrap">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleQuickAmount('0.1')}
          >
            0.1 SOL
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleQuickAmount('0.5')}
          >
            0.5 SOL
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleQuickAmount('1')}
          >
            1 SOL
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleQuickAmount('2')}
          >
            2 SOL
          </Button>
        </Flex>

        {/* Trade Button */}
        <Button
          colorScheme={group.value === 'buy' ? 'pastelGreen' : 'red'}
          size="lg"
          onClick={handleTrade}
          isDisabled={!amount}
          mt={2}
        >
          Place {group.value}
        </Button>

        {/* Trade Info */}
        <VStack spacing={2} align="stretch" fontSize="sm" color="gray.400">
          <Flex justify="space-between">
            <Text>Price Impact</Text>
            <Text>~2.5%</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Network Fee</Text>
            <Text>0.00005 SOL</Text>
          </Flex>
          <Flex justify="space-between" fontWeight="bold">
            <Text>Total</Text>
            <Text>{amount ? `${(parseFloat(amount) * 1.025).toFixed(4)} SOL` : '-'}</Text>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
} 