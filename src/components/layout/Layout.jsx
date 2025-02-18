import { Box, Container, Flex, Link, Spacer, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { WalletConnect } from '../WalletConnect';
import { HowItWorksModal } from '../shared/HowItWorksModal';

export function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" w="100vw" bg="darkBg.900">
      {/* Header */}
      <Box borderBottom="1px" borderColor="darkBg.700" w="100%">
        <Container maxW="100%" px={4}>
          <Flex align="center" gap={4} h="64px">
            <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color="pastelGreen.400">
              PumpProject
            </Link>

            <Link
              color="gray.300"
              fontSize="sm"
              onClick={onOpen}
              cursor="pointer"
              _hover={{ color: 'gray.100' }}
            >
              How it works?
            </Link>

            <Spacer />
            
            <Link as={RouterLink} to="/profile" color="gray.300" fontSize="sm" mr={4}>
              My Profile
            </Link>
            
            <WalletConnect />
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="100%" px={4} py={8}>
        {children}
      </Container>

      {/* How it works modal */}
      <HowItWorksModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
} 