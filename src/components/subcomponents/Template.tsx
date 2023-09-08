
import { TemplateProps } from '@/utils/data'
import { Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    item:TemplateProps
    
}
 


export default function Template({ item }: Props) {
  
  return (
      <Flex w='sm' backgroundColor="white" borderWidth='1px' borderRadius='lg' padding="18px" gap="10px" flexDirection="column">
          <Flex>
              <Text fontSize="14px" fontWeight="bold">{item.title }</Text>
          </Flex>
          <Flex gap="80px">
              
          <Flex flexDirection="column" gap="10px">
              <Text fontSize="13px" color="gray.500" >{item.sub1.key}</Text>
                  <Text fontSize="12px">{item.sub1.value?item.sub1.value: "-" }</Text>
              
          </Flex>
          <Flex flexDirection="column" gap="10px">
              <Text fontSize="13px" color="gray.500" >{ item.sub2.key}</Text> 
                  <Text fontSize="12px">{ item.sub2.value? item.sub2.value: "-"}</Text>
          </Flex>
         </Flex>
          {item.value &&<> 
             <Flex gap="80px">
                  <Text fontSize="13px" color="gray.500">{ item.sub3?.key}</Text>
             
          </Flex>
          <Flex gap="80px">
                  <Text fontSize="12px">{item.sub3?.value?item.sub3?.value:"-" }</Text>
              
              </Flex>
          </>
          }
    </Flex>
  )
}