import * as React from 'react'
import {
  Controller,
  ControllerProps,
  FormProvider,
  useFormContext,
  FieldValues,
  FieldPath,
} from 'react-hook-form'
import { FormFieldContext, FormItemContext } from './form-contexts'
import { useFormField } from './use-form-field'

const Form = FormProvider

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

export { Form, FormField }
