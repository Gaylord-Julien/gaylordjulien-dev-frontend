'use client';
import { Label } from '@/components/contact/label';
import { Input, InputProps } from '@/components/contact/inputs/textInput';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorMessage from '@/components/contact/errorMessage';
import { FormValues } from '@/components/contact/schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/contact/inputs/select';
import { clsx } from 'clsx';
import { InputPhone } from '@/components/ui/input-phone';

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
      <Label htmlFor={name}>{label} *</Label>
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
  const { control, formState, trigger } = useFormContext<FormValues>();
  const { errors } = formState;
  return (
    step === 0 && (
      <>
        <Controller
          name={'gender'}
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              onOpenChange={(isOpen) => {
                if (isOpen) {
                  trigger('gender');
                }
              }}
              value={field.value}
            >
              <SelectTrigger
                className={clsx('w-[180px]', {
                  'border-destructive': errors?.gender,
                })}
              >
                <SelectValue placeholder="Civilité *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="F">Mme</SelectItem>
                <SelectItem value="M">M.</SelectItem>
                <SelectItem value="O">Autre</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <FormField name="lastName" label="Nom" type={'text'} placeholder={'Doe'} />
        <FormField name={'firstName'} label={'Prénom'} type={'text'} placeholder={'John'} />
        <FormField name="email" label="Email" type={'email'} placeholder={'john@doe.fr'} />
        <Label htmlFor="phone">Téléphone</Label>
        <Controller
          name={'phone'}
          control={control}
          render={({ field }) => (
            <InputPhone
              value={field.value}
              onChange={field.onChange}
              placeholder="0630033530"
              defaultCountry="FR"
              limitMaxLength
            />
          )}
        />
      </>
    )
  );
};

export default Details;
