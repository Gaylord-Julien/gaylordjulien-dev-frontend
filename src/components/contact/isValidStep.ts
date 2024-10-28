import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/components/contact/schema';

const useIsValidStep = (fieldsToCheck: (keyof FormValues)[]) => {
  const { formState } = useFormContext<FormValues>();
  const { errors, dirtyFields } = formState;

  return fieldsToCheck.every((field) => dirtyFields[field] && !errors[field]);
};

export default useIsValidStep;
