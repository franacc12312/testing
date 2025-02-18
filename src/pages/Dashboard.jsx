import { Box, Button, Grid, Heading, VStack, Text, Flex, Image, Progress } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiPlus, FiClock } from 'react-icons/fi';
import { useAppColors } from '../context/ColorContext';

export function Dashboard() {
  const { colors } = useAppColors();
  
  // Placeholder data - will be replaced with real data
  const featuredToken = {
    name: "King of the Hill",
    marketCap: "$67.3K",
    creator: "7nmfvx",
    timeAgo: "3m ago",
  };

  // Mock data for recent tokens
  const recentTokens = [
    {
      id: 1,
      name: "Token 1",
      ticker: "TOKEN1",
      marketCap: 8799.09,
      creator: "User1",
      image: "https://via.placeholder.com/150",
      holders: 264,
      timeLeft: "2h 15m",
      replies: 156
    },
    {
      id: 2,
      name: "Wake Me Up",
      ticker: "COMA",
      marketCap: 7432.51,
      creator: "7n1p3t",
      image: "https://via.placeholder.com/150",
      holders: 189,
      timeLeft: "1h 45m",
      replies: 264
    },
    {
      id: 3,
      name: "Moon Soon",
      ticker: "MOON",
      marketCap: 12567.34,
      creator: "LunarKing",
      image: "https://via.placeholder.com/150",
      holders: 342,
      timeLeft: "3h 20m",
      replies: 198
    },
    {
      id: 4,
      name: "Pepe Classic",
      ticker: "PEPE2",
      marketCap: 5678.90,
      creator: "MemeLord",
      image: "https://via.placeholder.com/150",
      holders: 156,
      timeLeft: "4h 10m",
      replies: 321
    },
    {
      id: 5,
      name: "Sol Surfer",
      ticker: "SURF",
      marketCap: 15789.45,
      creator: "WaveRider",
      image: "https://via.placeholder.com/150",
      holders: 423,
      timeLeft: "1h 30m",
      replies: 178
    },
    {
      id: 6,
      name: "Degen Hours",
      ticker: "DEGEN",
      marketCap: 9876.23,
      creator: "NightOwl",
      image: "https://via.placeholder.com/150",
      holders: 289,
      timeLeft: "5h 45m",
      replies: 245
    }
  ];

  return (
    <VStack spacing={8} align="stretch" w="100%">
      {/* Create Token Button */}
      <Box px={{ base: 4, lg: 8 }}>
        <Button
          as={RouterLink}
          to="/create"
          size="lg"
          leftIcon={<FiPlus />}
          bg={colors.default}
          color="white"
          width={{ base: 'full', sm: 'auto' }}
          height="50px"
          fontSize="lg"
          _hover={{ bg: colors.hover }}
          _active={{ bg: colors.hover }}
        >
          Start a new coin
        </Button>
      </Box>

      {/* Featured Token */}
      <Flex justify="center" w="100%" px={{ base: 4, lg: 8 }}>
        <Box
          w={{ base: '100%', md: '50%', lg: '35%' }}
          p={4}
          bg="darkBg.800"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="darkBg.700"
        >
          <Heading size="md" mb={4}>
            Featured Token
          </Heading>
          <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={4}>
            <Box>
              <Text color="gray.400" fontSize="xs" mb={1}>
                Created by {featuredToken.creator}
              </Text>
              <Heading size="lg" mb={2}>
                {featuredToken.name}
              </Heading>
              <Text color="highlight" fontSize="lg" fontWeight="bold" mb={1}>
                {featuredToken.marketCap}
              </Text>
              <Text color="gray.400" fontSize="xs">
                {featuredToken.timeAgo}
              </Text>
            </Box>
            <Box
              bg="darkBg.700"
              borderRadius="lg"
              aspectRatio={1}
              w="100%"
              overflow="hidden"
            />
          </Grid>
        </Box>
      </Flex>

      {/* Recent Tokens */}
      <Box w="100%" px={{ base: 4, lg: 8 }}>
        <Heading size="lg" mb={4}>
          Recent Tokens
        </Heading>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
          w="100%"
        >
          {recentTokens.map((token) => (
            <Box
              key={token.id}
              p={4}
              bg="darkBg.800"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="darkBg.700"
              cursor="pointer"
              _hover={{ borderColor: colors.default }}
              as={RouterLink}
              to={`/token/${token.id}`}
              transition="all 0.2s"
            >
              <Flex gap={3}>
                <Image
                  src={token.image}
                  alt={token.name}
                  boxSize="100px"
                  borderRadius="lg"
                  bg="darkBg.700"
                />
                <Box flex="1">
                  <Heading size="md" mb={1}>
                    {token.name} (${token.ticker})
                  </Heading>
                  <Text color="gray.400" fontSize="sm" mb={2}>
                    Created by {token.creator}
                  </Text>
                  <Flex align="baseline" mb={2}>
                    <Text color="white" fontSize="sm" mr={2}>
                      market cap:
                    </Text>
                    <Text color="highlight" fontSize="lg" fontWeight="bold">
                      ${token.marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                  </Flex>
                  <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={3}>
                    <Text color="gray.400" fontSize="xs">
                      holders: {token.holders}
                    </Text>
                    <Text color="gray.400" fontSize="xs">
                      replies: {token.replies}
                    </Text>
                    <Flex align="center" color="gray.400" fontSize="xs" gap={1}>
                      <FiClock />
                      {token.timeLeft}
                    </Flex>
                  </Grid>
                  <Progress 
                    value={70} 
                    size="xs" 
                    colorScheme="green" 
                    borderRadius="full"
                    bg="darkBg.700"
                  />
                </Box>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
} 