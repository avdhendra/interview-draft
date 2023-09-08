import { Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputComponent from '../subcomponents/InputComponent'
import { Form, Formik } from 'formik'

import * as Yup from 'yup'
import { DURATION, INTERVIEW, LOCATION } from '@/utils/data'
import { InputType } from '@/app/page'
type Props = {
    handleInputChange: any,
    handleNext: any,
    handlePrevious: any
}
type MyFormValues = {
    Interview: string,
    Duration: string,
    Location: string,

}
export default function InterviewDetails({ handleInputChange ,handlePrevious,handleNext}: Props) {
   const [isFilled, setIsFilled] = useState(false)
    const validateSchema = Yup.object().shape({
        Interview: Yup.string().required("Required"),
        Duration: Yup.string().required("Required"),
        Location: Yup.string().required("Required"),

    })
    const initialValues: MyFormValues = {
        Interview: "",
        Duration: "",
        Location: "",

    };
    return (

        <Formik initialValues={initialValues}
            validationSchema={validateSchema}
            validate={(v) => setIsFilled(Object.values(v).some(Boolean))}
            onSubmit={(values, actions) => {
                // console.log({ values, actions });
                // alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(false);
                isFilled?handleNext():null
            }}
        >
            {(formikProps: any) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <Flex flexDirection="column">
                        <InputComponent
                            title="Interview Mode"
                            type="select"
                            name="Interview"
                            option={INTERVIEW}
                            error={formikProps.errors.Interview}
                            value={formikProps.values.Interview}
                            placeholder='Select Interview Mode'

                            onChange={(e: any) => {
                                formikProps.setFieldValue('Interview', e.target.value)
                                handleInputChange(e)
                            }}

                        />

                        <InputComponent
                            title="Interview Duration"
                            type="select"
                            name="Duration"
                            option={DURATION}
                            error={formikProps.errors.Duration}
                            value={formikProps.values.Duration}
                            placeholder='Select Interview Duration'

                            onChange={(e: any) => {
                                formikProps.setFieldValue('Duration', e.target.value)
                                handleInputChange(e)
                            }}

                        />
                        <InputComponent
                            title="Job Location"
                            type="select"
                            name="Location"
                            option={LOCATION}
                            error={formikProps.errors.Location}
                            value={formikProps.values.Location}
                            placeholder='Select Interview Language'

                            onChange={(e: any) => {
                                formikProps.setFieldValue('Location', e.target.value)
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
                        <Button colorScheme='red' size='md'  type='submit'>
                            Next
                        </Button>
                    </Flex>
                </Form>
            )}


        </Formik>
    )
}