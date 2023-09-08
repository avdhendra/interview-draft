
'use client';
import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import RequisitionDetails from '@/components/Requitition/RequisitionDetails';
import JobDetails from '@/components/JobDetails/JobDetails';
import InterviewDetails from '@/components/InterviewDetails/InterviewDetails';
import Card from '@/components/subcomponents/Card';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
export type InputType = {
   title: string,
    opening: string,
    Gender: string,
    Urgency: string,
    jobtitle: string,
    jobdetails: string,
    joblocation: string,
    Interview: string,
    Duration: string,
    Location: string,
}
export default function Home() {
   const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prevTab) => Math.min(prevTab + 1, 2));
  };

  const handlePrevious = () => {
    setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
  };
  const [inputValue, setInputValue] = useState<InputType>({
    title: "",
    opening: "",
    Gender: "",
    Urgency: "",
    jobtitle: "",
    jobdetails: "",
    joblocation: "",
    Interview: "",
    Duration: "",
    Location: "",
  });

const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  console.log("name: " + name,"value: " + value);
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };



  return (
    <ChakraProvider>
      <main >
        <Flex px="300px" flexDirection="column" gap="30px" mt="30px">
          <Flex w="full">

            <Heading as="h3" size="lg" w="full" >Create Candidate Requisition</Heading>

          </Flex>
          <Flex w="full">
            <Tabs w="full" index={activeTab}>
              <TabList>
                <Tab>Requisition Details</Tab>
                <Tab>Job Details</Tab>
                <Tab>Interview Settings</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <RequisitionDetails handleInputChange={handleInputChange} handleNext={handleNext} />
                </TabPanel>
                <TabPanel>
                  <JobDetails handleInputChange={handleInputChange} handleNext={handleNext} handlePrevious={handlePrevious} />
                </TabPanel>
                <TabPanel>
                  <InterviewDetails handleInputChange={handleInputChange} handleNext={handleNext } handlePrevious={handlePrevious} />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Flex position="relative" top="60px" zIndex="5px" >
              <Card inputValue={ inputValue} />
            </Flex>
          </Flex>

        </Flex>



      </main>
    </ChakraProvider>
  )
}
