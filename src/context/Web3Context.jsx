import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useToast } from '@chakra-ui/react';

const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const checkMetaMask = async () => {
      try {
        setIsInitializing(true);
        
        // Check if MetaMask is installed
        if (typeof window.ethereum === 'undefined') {
          toast({
            title: 'MetaMask not found',
            description: 'Please install MetaMask to use this application',
            status: 'warning',
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        // Initialize provider without requesting accounts
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        // Get network
        const network = await provider.getNetwork();
        setChainId(network.chainId);

        // Check if already connected
        const accounts = await window.ethereum.request({
          method: 'eth_accounts'
        });
        
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }

        // Setup event listeners
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          } else {
            setAccount(null);
          }
        });

        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });

        window.ethereum.on('connect', () => {
          console.log('MetaMask Connected');
        });

        window.ethereum.on('disconnect', () => {
          setAccount(null);
          toast({
            title: 'Disconnected',
            description: 'MetaMask disconnected',
            status: 'warning',
            duration: 5000,
            isClosable: true,
          });
        });

      } catch (error) {
        console.error('Error initializing Web3:', error);
        toast({
          title: 'Error',
          description: 'Failed to initialize Web3',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsInitializing(false);
      }
    };

    checkMetaMask();

    // Cleanup function
    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners();
      }
    };
  }, [toast]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: 'MetaMask not found',
        description: 'Please install MetaMask to connect your wallet',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      
      toast({
        title: 'Connected',
        description: 'Wallet connected successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: 'Error',
        description: error.message || 'Could not connect wallet',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Web3Context.Provider
      value={{
        account,
        provider,
        chainId,
        connectWallet,
        isInitializing,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
} 