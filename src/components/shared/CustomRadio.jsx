import { Box, useRadio } from '@chakra-ui/react';

export function CustomRadio(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" flex="1">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: props.value === 'buy' ? 'pastelGreen.400' : 'red.400',
          color: 'white',
          borderColor: props.value === 'buy' ? 'pastelGreen.400' : 'red.400',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        textAlign="center"
        fontWeight="medium"
        transition="all 0.2s"
        borderColor="darkBg.600"
        bg="darkBg.900"
        color="gray.300"
        _hover={{
          borderColor: props.value === 'buy' ? 'pastelGreen.400' : 'red.400',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
} 