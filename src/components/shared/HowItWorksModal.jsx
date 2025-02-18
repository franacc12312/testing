import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Link,
  Button,
} from '@chakra-ui/react';

export function HowItWorksModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent bg="darkBg.800" color="white">
        <ModalHeader>How it works</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="stretch">
            <Text>
              PumpProject ensures that all created tokens are safe to trade through
              a secure and battle-tested token launching system. Each coin
              on our platform is a{' '}
              <Text as="span" color="pastelGreen.400">
                fair-launch
              </Text>{' '}
              with{' '}
              <Text as="span" color="pastelBlue.400">
                no presale
              </Text>{' '}
              and{' '}
              <Text as="span" color="orange.400">
                no team allocation
              </Text>
              .
            </Text>

            <Text fontWeight="bold" mt={4}>
              Step 1: Pick a coin that you like
            </Text>
            <Text>Browse through available tokens and select one that interests you.</Text>

            <Text fontWeight="bold">
              Step 2: Buy the coin on the bonding curve
            </Text>
            <Text>Use the trading interface to purchase tokens at the current price.</Text>

            <Text fontWeight="bold">
              Step 3: Sell at any time to lock in your profits or losses
            </Text>
            <Text>You can sell your tokens at any time through the same interface.</Text>

            <Text fontWeight="bold">
              Step 4: When enough people buy on the bonding curve it reaches a market cap of $100k
            </Text>
            <Text>The token graduates when it reaches this milestone.</Text>

            <Text fontWeight="bold">
              Step 5: $17k of liquidity is then deposited in raydium and burned
            </Text>
            <Text>This ensures sustainable trading after graduation.</Text>

            <VStack spacing={2} mt={4}>
              <Link color="pastelBlue.400" href="/privacy" isExternal>
                privacy policy
              </Link>
              <Link color="pastelBlue.400" href="/terms" isExternal>
                terms of service
              </Link>
              <Link color="pastelBlue.400" href="/fees" isExternal>
                fees
              </Link>
            </VStack>

            <Text fontSize="sm" color="gray.400" textAlign="center" mt={4}>
              By using this platform you agree to the terms and conditions and certify
              that you are over 18
            </Text>

            <Button colorScheme="green" onClick={onClose} mt={4}>
              I'm ready to pump
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
} 