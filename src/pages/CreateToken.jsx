import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Textarea,
  useToast,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAppColors } from '../context/ColorContext';

export function CreateToken() {
  const toast = useToast();
  const navigate = useNavigate();
  const { colors } = useAppColors();

  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'video/*': ['.mp4', '.webm']
    },
    maxFiles: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle token creation here
    toast({
      title: 'Token Created',
      description: 'Your token has been created successfully',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Box maxW="container.md" mx="auto">
      <VStack spacing={8} align="stretch">
        <Box>
          <Button variant="ghost" onClick={() => navigate(-1)} mb={4}>
            [go back]
          </Button>
          <Heading size="lg" mb={2}>
            Create a new token
          </Heading>
          <Text color="gray.400">
            Launch your own token on the platform
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="darkBg.800"
          p={6}
          borderRadius="xl"
          borderWidth="1px"
          borderColor="darkBg.700"
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter token name"
                bg="darkBg.900"
                border="none"
                _focus={{ ring: 1, ringColor: 'pastelGreen.400' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Ticker</FormLabel>
              <InputGroup>
                <InputLeftElement>$</InputLeftElement>
                <Input
                  placeholder="Token symbol"
                  bg="darkBg.900"
                  border="none"
                  _focus={{ ring: 1, ringColor: 'pastelGreen.400' }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe your token"
                bg="darkBg.900"
                border="none"
                _focus={{ ring: 1, ringColor: 'pastelGreen.400' }}
                rows={4}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Image or Video</FormLabel>
              <Box
                {...getRootProps()}
                p={6}
                bg="darkBg.900"
                borderRadius="lg"
                borderWidth={2}
                borderStyle="dashed"
                borderColor={isDragActive ? 'pastelGreen.400' : 'darkBg.700'}
                cursor="pointer"
                _hover={{ borderColor: 'pastelGreen.400' }}
              >
                <input {...getInputProps()} />
                <VStack spacing={2}>
                  <FiUpload size={24} />
                  <Text textAlign="center">
                    {isDragActive
                      ? 'Drop the file here'
                      : 'Drag and drop an image or video, or click to select'}
                  </Text>
                </VStack>
              </Box>
            </FormControl>

            <Button
              type="submit"
              bg={colors.default}
              color="white"
              size="lg"
              width="full"
              mt={4}
              _hover={{ bg: colors.hover }}
              _active={{ bg: colors.hover }}
            >
              Create Token
            </Button>

            <Text fontSize="sm" color="gray.400" textAlign="center">
              By creating a token, you agree to our terms of service and confirm that
              you are over 18 years old
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
} 