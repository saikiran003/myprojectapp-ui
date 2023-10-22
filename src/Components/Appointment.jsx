import React from 'react'
import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = ({handleInputChange,emailError,mobileError}) => {
    // const [show, setShow] = useState(false)
    // const handleClick = () => setShow(!show)
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Appointment Form
        </Heading>
        <Flex>
          <FormControl mr="5%" mb="2%" isRequired>
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              First name
            </FormLabel>
            <Input id="first-name" placeholder="First name" onChange={(e) => handleInputChange('firstName', e.target.value)} />
          </FormControl>
  
          <FormControl isRequired>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
              Last name
            </FormLabel>
            <Input id="last-name" placeholder="First name" onChange={(e) => handleInputChange('lastName', e.target.value)}/>
          </FormControl>
        </Flex>
        <Flex>
          <FormControl mr="5%" isRequired>
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              Gender
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="md"
              w="full"
              rounded="md"
              onChange={(e) => handleInputChange('gender', e.target.value)}
              >
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </Select>
          </FormControl>
  
          <FormControl isRequired>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
              Age
            </FormLabel>
            <Input type="number" id="last-name" placeholder="First name" onChange={(e) => handleInputChange('age', e.target.value)}/>
          </FormControl>
        </Flex>
        <FormControl mt="2%" isInvalid={emailError}>
          <FormLabel htmlFor="email" fontWeight={'normal'}>
            Email address
          </FormLabel>
          <Input id="email" type="email" onChange={(e) => handleInputChange('email', e.target.value)}/>
          {emailError ? <FormErrorMessage>Please enter valid email address</FormErrorMessage> : <FormHelperText>We&apos;ll never share your email.</FormHelperText>}
        </FormControl>
  
        <FormControl isInvalid={mobileError} isRequired>
          <FormLabel htmlFor="mobilenumber" fontWeight={'normal'} mt="2%">
            Mobile Number
          </FormLabel>
          <Input type='number' placeholder='Phone number' onChange={(e) => handleInputChange('mobileNumber', e.target.value)}/>
          {mobileError && (<FormErrorMessage>Please enter valid mobile number</FormErrorMessage>)}
        </FormControl>
      </>
    )
  }

  const Form2 = ({handleInputChange}) => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          User Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Country / Region
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleInputChange('country', e.target.value)}
            >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </Select>
        </FormControl>
  
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Street address
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleInputChange('streetAddress', e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            City
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            State / Province
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleInputChange('state', e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            ZIP / Postal
          </FormLabel>
          <Input
            type="number"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleInputChange('postalCode', e.target.value)}
          />
        </FormControl>
      </>
    )
  }
  
  const Form3 = ({handleInputChange}) => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Patient Problem
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl id="email" mt={1}>
            <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
              Pick the Date
            </FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e) => handleInputChange('dateAndTime', e.target.value)}
              />
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Issue
            </FormLabel>
            <Textarea
              placeholder="Write your problem"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
              onChange={(e) => handleInputChange('issue', e.target.value)}
            />
            <FormHelperText>
              Brief description for your problem. so that we can help you better.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </>
    )
  }
  

const Appointment = () => {
    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    const [emailError,setEmailError] = useState(false)
    const [mobileError,setMobileError] = useState(false)
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      email: '',
      mobileNumber: '',
      country: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      dateAndTime: '',
      issue: '',
    });

    const handleInputChange = (field, value) => {
      // Update the form data state when an input field changes
      setFormData({
        ...formData,
        [field]: value,
      });
    };

    const handleNext = () => {
      let emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      let mobileRegex = new RegExp(/^\d{10}$/)
      // setStep(step + 1)
      if(step===1){
        if(!emailRegex.test(formData.email)) setEmailError(true)
        if(!mobileRegex.test(formData.mobileNumber)) setMobileError(true)
        if(formData.firstName.length>3 && formData.lastName && formData.gender && formData.age <=100 && !emailError && ! mobileError) setStep(step + 1)
        else {
          toast({
            title: 'Some fields are missing.',
            description: "Please fill all required fields",
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          })
        }
      }
      if(step === 2) {
        if(formData.postalCode.length !== 6){
          toast({
            title: 'Postal Code',
            description: "Please fill correct postal code.",
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          })
        } else {
          setStep(step + 1)
          setProgress(progress + 33.33)
        }
        
      }
      if (step === 3) {
        setProgress(100)
      } 
    }

    const handleSubmit = () =>{
      toast({
        title: 'Patient Appointment',
        description: "Your Appointment with doctor was successfull",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
    }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 handleInputChange={handleInputChange} emailError={emailError} mobileError={mobileError}/> : step === 2 ? <Form2 handleInputChange={handleInputChange}/> : <Form3 handleInputChange={handleInputChange}/>}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={handleNext}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default Appointment