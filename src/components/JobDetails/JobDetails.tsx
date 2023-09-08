import { Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputComponent from '../subcomponents/InputComponent'
import { Form, Formik } from 'formik'

import * as Yup from 'yup'
import { InputType } from '@/app/page'
type Props = {
    handleInputChange: any,
    handleNext: any,
     handlePrevious: any
}
type MyFormValues = {
    jobtitle: string,
    jobdetails: string,
    joblocation: string,

}
export default function JobDetails({ handleInputChange,handleNext,handlePrevious}: Props) {
    const [isFilled, setIsFilled] = useState(false)
    const validateSchema = Yup.object().shape({
        jobtitle: Yup.string().required("Required"),
        jobdetails: Yup.string().required("Required"),
        joblocation: Yup.string().required("Required"),

    })
    const initialValues: MyFormValues = {
        jobtitle: "",
        jobdetails: "",
        joblocation: "",

    };
    return (

        <Formik initialValues={initialValues}
            validationSchema={validateSchema}
            validate={(v) => setIsFilled(Object.values(v).some(Boolean))}
            onSubmit={(values, actions) => {
                isFilled?handleNext():null
            }}
        >
            {(formikProps: any) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <Flex flexDirection="column">
                        <InputComponent
                            title="Job Title"
                            type='text'
                            name="jobtitle"
                            value={formikProps.values.jobtitle}
                            error={formikProps.errors.jobtitle}
                            placeholder='Enter Job Title'
                            onChange={(e: any) => {
                                formikProps.setFieldValue('jobtitle', e.target.value)
                                handleInputChange(e)
                            }}

                        />
                        <InputComponent
                            title="Job Details"
                            type="text"
                            name="jobdetails"
                            placeholder='Enter Job details'
                            error={formikProps.errors.jobdetails}
                            value={formikProps.values.jobdetails}
                            onChange={(e: any) => {
                                formikProps.setFieldValue('jobdetails', e.target.value)
                                handleInputChange(e)
                            }}

                        />
                        <InputComponent
                            title="Job Location"
                            type="text"
                            name="joblocation"
                            placeholder='Enter Job Location'
                            error={formikProps.errors.joblocation}
                            value={formikProps.values.joblocation}
                            onChange={(e: any) => {
                                formikProps.setFieldValue('joblocation', e.target.value)
                                handleInputChange(e)
                            }}

                        />

                    </Flex>
                    <Flex justifyContent="flex-end" gap="20px">
                        <Button colorScheme='gray' size='md' onClick={() => {
                            handlePrevious()
                        }}>
                            Previous
                        </Button>
                        <Button colorScheme='red' size='md' type='submit'>
                            Next
                        </Button>
                    </Flex>
                </Form>
            )}


        </Formik>
    )
}