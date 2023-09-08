import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Template from './Template'
import { InputType } from '@/app/page'
import { TemplateProps } from '@/utils/data'

type Props = {
    inputValue:InputType
}

export default function Card({ inputValue }: Props) {
    
    const TEMPLATE:TemplateProps[] = [
  {
    title: "Requition Details",
    sub1: {key:"Urgency",value:inputValue.Urgency},
    sub2:{key:"Gender",value:inputValue.Gender},
    value:false
  }, {
    title: "Job Details",
    sub1: {key:"Job Title",value:inputValue.jobtitle},
    sub2: {key:"Job Details",value:inputValue.jobdetails},
    sub3: {key:"Job Location",value:inputValue.joblocation},
    value:true
  }
  , {
    title: "Interview Settings",
    sub1: {key:"Interview Duration",value:inputValue.Duration},
    sub2: {key:"Interview Language",value:inputValue.Location},
    sub3: {key:"Interview Mode",value:inputValue.Interview},
    value:true
  }]
    return (
        <Box w='sm' backgroundColor="gray.100" borderWidth='1px' borderRadius='lg' >
            <Flex justifyContent="space-between">
                <Flex flexGrow="3" >
                    <Text fontSize='16px' fontWeight="bold" ml="30px"><i>Draft</i></Text>
                </Flex>
                <Flex backgroundColor="red.500" padding="5px" flexGrow="1" justifyContent="center" borderTopRightRadius="lg" >
                    <Text color="white"  >Preview</Text>

                </Flex>

            </Flex>
           
            <Flex padding="20px">

            <Box w="sm" backgroundColor="purple.700" borderRadius="lg" >
                <Flex justifyContent="space-between" padding="16px">
                    <Flex>
                            <Text fontSize="16px" color="white" fontWeight="bold">{inputValue.title}</Text>
                    </Flex>
                    <Flex>
                            <Text fontSize="14px" color="white">OPENING <b>{ inputValue.opening?inputValue.opening:0}</b></Text>
                    </Flex>
                </Flex>
            </Box>
            </Flex>

            <Flex justifyContent="column" padding="20px" flexWrap="wrap" gap="30px">
              
                {TEMPLATE.map((item: TemplateProps, index) => <Template key={index} item={item} />)}
            </Flex>

        </Box>
    )
}