'use client';
import { Label } from '@/components/contact/label';
import { Input, InputProps } from '@/components/contact/inputs/textInput';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorMessage from '@/components/contact/errorMessage';
import { FormValues } from '@/components/contact/schema';

type DetailsProps = {
  step: number;
};

type FormFieldProps = {
  name: keyof Pick<FormValues, 'lastName' | 'email' | 'firstName'>;
  label: string;
} & Omit<InputProps, 'error'>;

const FormField = ({ name, label, ...rest }: FormFieldProps) => {
  const { control, formState } = useFormContext<FormValues>();
  const { errors } = formState;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            disabled={formState.disabled}
            onChange={field.onChange}
            error={errors[name]}
            value={field?.value ?? ''}
            {...rest}
          />
        )}
      />
      {errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

const Details = ({ step }: DetailsProps) => {
  return (
    step === 0 && (
      <>
        <FormField name="lastName" label="Nom" type={'text'} />
        <FormField name={'firstName'} label={'Prénom'} type={'text'} />
        <FormField name="email" label="Email" type={'email'} />
      </>
    )
  );
};

export default Details;
