'use client';
import { Label } from '@/components/contact/label';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorMessage from '@/components/contact/errorMessage';
import { FormValues } from '@/components/contact/schema';
import { Textarea } from '@/components/contact/inputs/textArea';
import { Checkbox } from '@/components/contact/inputs/checkbox';

type DetailsProps = {
  step: number;
};

const FormField = ({ name, label }: { name: keyof Pick<FormValues, 'message'>; label: string }) => {
  const { control, formState } = useFormContext<FormValues>();
  const { errors } = formState;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Textarea
            disabled={formState.disabled}
            onChange={field.onChange}
            error={errors[name]}
            value={field?.value ?? ''}
            placeholder={'Décrivez votre projet en quelques mots, vos besoins, vos attentes...'}
          />
        )}
      />
      {errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

const Project = ({ step }: DetailsProps) => {
  const { control, formState } = useFormContext<FormValues>();
  const { errors } = formState;

  return (
    step === 1 && (
      <>
        <FormField name="message" label="Votre projet" />
        <Controller
          name={'dataProcessing'}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={'dataProcessing'}
              disabled={formState.disabled}
              onCheckedChange={field.onChange}
              error={errors?.dataProcessing}
              checked={field?.value ?? false}
              label={"J'accepte que mes données soient utilisées pour me recontacter."}
            />
          )}
        />
      </>
    )
  );
};

export default Project;
