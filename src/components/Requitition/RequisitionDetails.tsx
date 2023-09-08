import { Flex ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import InputComponent from '../subcomponents/InputComponent'
import { Form, Formik } from 'formik'

import * as Yup from 'yup'
import { GENDER,URGENCY } from '@/utils/data'
import { InputType } from '@/app/page'
type Props = {
    handleInputChange: any,
    handleNext:any
}
type MyFormValues = {
    title: string,
    opening: string,
    Gender: string,
    Urgency:string
}
export default function RequisitionDetails({handleInputChange,handleNext }: Props) {
    
   const [isFilled, setIsFilled] = useState(false)
    const validateSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        opening: Yup.string().required("Enter a valid Number"),
        Gender: Yup.string().required("Required"),
        Urgency: Yup.string().required("Required")
})
    const initialValues: MyFormValues = {
        title: "",
        opening: "",
        Gender: "",
        Urgency: ""
    };
    return (
      
        <Formik initialValues={initialValues}
            validationSchema={validateSchema}
            validate={(v) => setIsFilled(Object.values(v).some(Boolean))}
        onSubmit={(values, actions) => {
        
             isFilled?handleNext():null
          
         }}
        >
            {(formikProps:any) => (
                <Form style={{ display: "flex", flexDirection:"column",gap:"30px"}}>
         <Flex flexDirection="column">
                        <InputComponent
                            title="Requisition Title"
                            type='text'
                            name="title"
                            placeholder='Enter Requisition Title'
                            value={formikProps.values.title}
                            error={formikProps.errors.title}
                            onChange={(e:any) => {
                                formikProps.setFieldValue('title', e.target.value);
                                handleInputChange(e)
                            }}
                            
                        />

                        <InputComponent
                            title="Number of Opening"
                            type="number"
                            name="opening"
                            placeholder='0'   
                            value={formikProps.values.opening}
                            error={formikProps.errors.opening}
                            onChange={(e: any) => {
                                formikProps.setFieldValue('opening', e.target.value)
                                 handleInputChange(e)
                            }}
                            
                        />
                        <InputComponent
                            title="Gender"
                            type="select"
                            name="Gender"
                            option={GENDER}
                            error={formikProps.errors.Gender}
                            value={formikProps.values.Gender}
                            placeholder='Select Gender'
                            onChange={(e: any) => {
                                formikProps.setFieldValue('Gender', e.target.value)
                                handleInputChange(e)
                                 
                            }}
                            
                        />
                        <InputComponent
                            title="Urgency"
                            type="select"
                            name="Urgency"
                            option={URGENCY}
                            value={formikProps.values.Urgency}
                            error={formikProps.errors.Urgency}
                            onChange={(e: any) => {
                                formikProps.setFieldValue('Urgency', e.target.value)
                                handleInputChange(e)
                            }}
                            placeholder='Select Urgency'
                            
                        />

                    </Flex>
                    <Flex justifyContent="flex-end">
                        <Button colorScheme='red' size='md' type="submit">
                            Next
                        </Button>
                    </Flex>
                </Form>
            )}

    
        </Formik>
  )
}