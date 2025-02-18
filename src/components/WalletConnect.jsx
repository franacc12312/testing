import React from 'react';
import { Button, useToast, Spinner } from '@chakra-ui/react';
import { useWeb3 } from '../context/Web3Context';
import { useAppColors } from '../context/ColorContext';

export function WalletConnect() {
  const { account, connectWallet, isInitializing } = useWeb3();
  const toast = useToast();
  const { colors } = useAppColors();

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not connect to wallet. Please make sure MetaMask is installed and unlocked.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isInitializing) {
    return (
      <Button
        disabled
        bg={colors.default}
        color="white"
        size="md"
        fontWeight="medium"
        px={6}
      >
        <Spinner size="sm" mr={2} />
        Initializing...
      </Button>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      bg={colors.default}
      color="white"
      size="md"
      fontWeight="medium"
      px={6}
      _hover={{ bg: colors.hover }}
      _active={{ bg: colors.hover }}
    >
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </Button>
  );
} 