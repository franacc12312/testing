import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Progress,
  Flex,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiZap, FiTag } from 'react-icons/fi';
import { useAppColors } from '../context/ColorContext';
import { useState } from 'react';

export function TokenPage() {
  const { tokenId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { colors } = useAppColors();
  const [tradeMode, setTradeMode] = useState('buy');
  const [amount, setAmount] = useState('');

  // Placeholder data - will be replaced with real data
  const tokenData = {
    name: 'COINBASE MASCOT',
    symbol: 'Baselisk',
    creator: '7byPJ1',
    marketCap: 21354,
    price: '0.000000015',
    image: 'https://via.placeholder.com/150',
    bondingCurveProgress: 73,
    kingOfTheHillProgress: 85,
    liquidityInBondingCurve: '34.243 SOL',
    graduationTarget: '$68,734',
    timeAgo: '38 minutes ago',
    replies: 87,
    tokenBalance: '2500.00',
    ethBalance: '0.0025'
  };

  const handleQuickAmount = (value) => {
    if (tradeMode === 'buy') {
      setAmount(value);
    } else {
      // Calculate percentage of token balance
      const balance = parseFloat(tokenData.tokenBalance);
      const percentage = parseInt(value) / 100;
      const calculatedAmount = (balance * percentage).toFixed(2);
      setAmount(calculatedAmount);
    }
  };

  const handleTrade = () => {
    toast({
      title: 'Trade Executed',
      description: 'Your trade has been executed successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {/* Header */}
      <VStack align="stretch" spacing={6}>
        <Button
          leftIcon={<FiArrowLeft />}
          variant="ghost"
          onClick={() => navigate(-1)}
          pl={0}
          _hover={{ bg: 'transparent' }}
        >
          [go back]
        </Button>

        <Flex justify="space-between" align="center">
          <Box>
            <HStack spacing={2} mb={1}>
              <Heading>{tokenData.name}</Heading>
              <Text color="gray.400">({tokenData.symbol})</Text>
            </HStack>
            <HStack spacing={4} color="gray.400">
              <Text>by {tokenData.creator}</Text>
              <Text color="highlight">market cap: ${tokenData.marketCap.toLocaleString()}</Text>
              <Text>replies: {tokenData.replies}</Text>
              <HStack spacing={1}>
                <FiClock />
                <Text>{tokenData.timeAgo}</Text>
              </HStack>
            </HStack>
          </Box>
        </Flex>
      </VStack>

      {/* Main Content */}
      <Grid templateColumns="1fr 400px" gap={8} mt={6} px={4}>
        {/* Left Column - Chart and Progress */}
        <VStack spacing={6} align="stretch">
          {/* Chart */}
          <Box
            bg="darkBg.800"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="darkBg.700"
            h="400px"
            p={4}
          >
            {/* Chart will be implemented here */}
            <Text color="gray.400">Trading chart will be displayed here</Text>
          </Box>

          {/* Progress Bars */}
          <Box
            bg="darkBg.800"
            p={6}
            borderRadius="xl"
            borderWidth="1px"
            borderColor="darkBg.700"
          >
            <VStack spacing={4} align="stretch">
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text>bonding curve progress</Text>
                  <Text color="highlight">{tokenData.bondingCurveProgress}%</Text>
                </Flex>
                <Progress
                  value={tokenData.bondingCurveProgress}
                  colorScheme="green"
                  borderRadius="full"
                  size="sm"
                  bg="darkBg.700"
                />
                <Text fontSize="sm" color="gray.400" mt={1}>
                  there is {tokenData.liquidityInBondingCurve} in the bonding curve
                </Text>
              </Box>

              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text>king of the hill progress</Text>
                  <Text color="yellow.400">{tokenData.kingOfTheHillProgress}%</Text>
                </Flex>
                <Progress
                  value={tokenData.kingOfTheHillProgress}
                  colorScheme="yellow"
                  borderRadius="full"
                  size="sm"
                  bg="darkBg.700"
                />
                <Text fontSize="sm" color="gray.400" mt={1}>
                  graduate this coin to raydium at {tokenData.graduationTarget} market cap
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Thread Section */}
          <Box>
            <Tabs variant="soft-rounded">
              <TabList mb={4}>
                <Tab
                  _selected={{
                    bg: 'highlight',
                    color: 'white',
                  }}
                >
                  thread
                </Tab>
                <Tab
                  _selected={{
                    bg: 'highlight',
                    color: 'white',
                  }}
                >
                  trades
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Box
                    bg="darkBg.800"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="darkBg.700"
                    p={4}
                  >
                    <Button size="sm" colorScheme="green" mb={4}>
                      post a reply
                    </Button>
                    <Text color="gray.400">Thread content will be displayed here</Text>
                  </Box>
                </TabPanel>
                <TabPanel p={0}>
                  <Box
                    bg="darkBg.800"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="darkBg.700"
                    p={4}
                  >
                    <Text color="gray.400">Trade history will be displayed here</Text>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </VStack>

        {/* Right Column - Trading Interface */}
        <Box
          bg="darkBg.800"
          p={8}
          borderRadius="xl"
          borderWidth="1px"
          borderColor="darkBg.700"
          h="fit-content"
          mx={4}
        >
          <VStack spacing={3} align="stretch">
            {/* Buy/Sell Buttons */}
            <Grid templateColumns="1fr 1fr" gap={4}>
              <Button 
                bg={tradeMode === 'buy' ? 'green.400' : 'transparent'}
                color={tradeMode === 'buy' ? 'white' : 'green.400'}
                border="1px solid"
                borderColor="green.400"
                size="lg"
                onClick={() => setTradeMode('buy')}
                h="60px"
                fontSize="xl"
                leftIcon={<Icon as={FiZap} />}
                _hover={{
                  bg: 'green.500',
                  color: 'white'
                }}
              >
                Buy
              </Button>
              <Button 
                bg={tradeMode === 'sell' ? 'red.400' : 'transparent'}
                color={tradeMode === 'sell' ? 'white' : 'red.400'}
                border="1px solid"
                borderColor="red.400"
                size="lg"
                onClick={() => setTradeMode('sell')}
                h="60px"
                fontSize="xl"
                leftIcon={<Icon as={FiTag} />}
                _hover={{
                  bg: 'red.500',
                  color: 'white'
                }}
              >
                Sell
              </Button>
            </Grid>

            {/* Amount Input */}
            <Box>
              <Text mb={1} color="gray.400" fontSize="sm">
                amount ({tradeMode === 'buy' ? 'ETH' : tokenData.symbol})
              </Text>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                size="lg"
                bg="darkBg.900"
                border="none"
                h="60px"
                fontSize="xl"
                _focus={{ 
                  ring: 1, 
                  ringColor: tradeMode === 'buy' ? 'green.400' : 'red.400' 
                }}
              />
            </Box>

            {/* Balance Display */}
            <Text color="gray.400" fontSize="sm" textAlign="right" mt={0.5} mb={0.15}>
              Balance: {tradeMode === 'buy' ? `${tokenData.ethBalance} ETH` : `${tokenData.tokenBalance} ${tokenData.symbol}`}
            </Text>

            {/* Quick Amount Buttons */}
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
              {(tradeMode === 'buy' ? 
                ['0.01', '0.05', '0.1', '1'] : 
                ['25%', '50%', '75%', '100%']
              ).map((amount) => (
                <Button
                  key={amount}
                  bg="transparent"
                  border="1px solid"
                  borderColor={tradeMode === 'buy' ? 'green.400' : 'red.400'}
                  color={tradeMode === 'buy' ? 'green.400' : 'red.400'}
                  size="md"
                  h="36px"
                  fontSize="sm"
                  borderRadius="md"
                  onClick={() => handleQuickAmount(tradeMode === 'buy' ? amount : amount.replace('%', ''))}
                  _hover={{
                    bg: tradeMode === 'buy' ? 'green.400' : 'red.400',
                    color: 'white'
                  }}
                >
                  {amount}
                </Button>
              ))}
            </Grid>

            {/* Place Trade Button */}
            <Button
              bg={tradeMode === 'buy' ? 'green.400' : 'red.400'}
              color="white"
              size="lg"
              onClick={handleTrade}
              h="60px"
              fontSize="xl"
              mt={2}
              _hover={{
                bg: tradeMode === 'buy' ? 'green.500' : 'red.500'
              }}
            >
              {tradeMode === 'buy' ? 'Buy' : 'Sell'}
            </Button>

            {/* Token Info */}
            <Box mt={4}>
              <Image
                src={tokenData.image}
                alt={tokenData.name}
                borderRadius="xl"
                w="100%"
                h="200px"
                objectFit="cover"
                bg="darkBg.700"
              />
            </Box>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
} 