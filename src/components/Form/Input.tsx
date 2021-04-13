/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { Field } from 'formik';
import InputMask from 'react-input-mask';
import RequiredAsterisk from './RequiredAsterisk';

export default function LInput({
    internalId,
    validation = null,
    placeholder,
    label = null,
    inputLeftChild = null,
    mask = null,
    inputMode = 'text',
}) {
    return (
        <Box mb="1.75rem">
            <Field name={internalId} validate={validation}>
                {({ field, form }) => (
                    <FormControl isInvalid={form.errors[internalId] && form.touched[internalId]}>
                        {label ? (
                            <FormLabel htmlFor={internalId} display="inline-block" mr="0.25rem">
                                {label}
                            </FormLabel>
                        ) : (
                            ''
                        )}
                        {/* {label && validation ? <RequiredAsterisk /> : ''} */}
                        <InputGroup>
                            {inputLeftChild ? (
                                <InputLeftElement pointerEvents="none" children={inputLeftChild} />
                            ) : (
                                ''
                            )}

                            <Input
                                variant="flushed"
                                {...field}
                                id={internalId}
                                placeholder={placeholder}
                                as={InputMask}
                                mask={mask}
                                inputMode={inputMode}
                            />
                        </InputGroup>
                        <FormErrorMessage>{form.errors[internalId]}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>
        </Box>
    );
}
