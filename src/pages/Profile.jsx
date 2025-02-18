import {
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  Grid,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAppColors } from '../context/ColorContext';
import { FiArrowLeft } from 'react-icons/fi';

export function Profile() {
  const { colors } = useAppColors();
  const navigate = useNavigate();

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Button
          leftIcon={<FiArrowLeft />}
          variant="ghost"
          onClick={() => navigate(-1)}
          mb={2}
          pl={0}
          _hover={{ bg: 'transparent' }}
        >
          [go back]
        </Button>
      </Box>

      <Box>
        <Heading size="2xl" mb={2}>My Profile</Heading>
        <Text color="gray.500">0xdf12...e95a</Text>
      </Box>

      <Tabs variant="soft-rounded" colorScheme={colors.default}>
        <TabList>
          <Tab 
            _selected={{ 
              bg: colors.default,
              color: 'white' 
            }}
          >
            Created Tokens
          </Tab>
          <Tab
            _selected={{ 
              bg: colors.default,
              color: 'white' 
            }}
          >
            Holdings
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              <Box
                p={6}
                bg="darkBg.800"
                borderRadius="xl"
                borderWidth="1px"
                borderColor="darkBg.700"
                cursor="pointer"
                _hover={{ borderColor: colors.default }}
                as={RouterLink}
                to="/token/1"
              >
                <Text color="gray.400" fontSize="sm">Created Token 1</Text>
                <Text fontSize="lg" fontWeight="bold">CT1</Text>
                <Text color="highlight" fontSize="sm">Market Cap: $12,345</Text>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Text color="gray.500">No holdings found</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
} 