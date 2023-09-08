import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select
} from '@chakra-ui/react'
type Props = {
    title: string,
    type: string,
    placeholder: string,
    name: string,
    value?:any,
    onChange: any
    option?: any
    error:string
   

}

type SelectProps = {
    title: string,
    options: object[],
    placeholder: string,
    name: string,
    onChange: any,
    value: string
    error:string
}

type TextProps = {
    title: string,
    type: string,
    placeholder: string,   
    onChange: any,
    name: string,
    value: string,
    error:string

}
type NumberProps = {
     title: string,
    type: string,
    placeholder: string,   
    onChange: any,
    name: string,
    value: string,
    error:string
}

export const NumberInput=({ title, type, placeholder, onChange, name, value,error }: NumberProps) => {
     const isError= error?.length>0?true:false
    return (<FormControl isInvalid={isError}>

        <FormLabel>{title}</FormLabel>
        <Input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={onChange}
        
        />
        { isError && <FormErrorMessage> Number is required.</FormErrorMessage>}

    </FormControl>)
}


export const TextInput = ({ title, type, placeholder, onChange, name, value,error }: TextProps) => {
    const isError= error?.length>0?true:false
    return (<FormControl isInvalid={isError}>

        <FormLabel>{title}</FormLabel>
        <Input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={onChange}
        
        />
        { isError && <FormErrorMessage>{title}  is Required.</FormErrorMessage>}

    </FormControl>)
}


export const SelectInput = ({ title, options, placeholder, name, onChange, value,error }: SelectProps) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       onChange(e)
        // Now, the selected value will be logged correctly.
    }
const isError= error?.length > 0?true:false
    return (
        <FormControl isInvalid={isError}>
            <FormLabel>{title}</FormLabel>
            <Select placeholder={placeholder} name={name}  value={value} onChange={handleOnChange}>
                {options.map((item: any, index: number) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Select>
             { isError && <FormErrorMessage>{title} is Required.</FormErrorMessage>}
        </FormControl>
    );
}
export default function InputComponent({ title, type, placeholder ,onChange,option,name,value,error}: Props) {



    if (type === "select") {      
        return (
         
            <SelectInput title={title}
                options={option}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                error={error}
                value={value} />
     )   
    }
  
    if (type === "text") {
        return (
        
            <TextInput title={title} type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} error={error } />
        
    )
    
    }

    if (type === "number") {
        return <NumberInput title={title} type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} error={error} />
    }

   

}