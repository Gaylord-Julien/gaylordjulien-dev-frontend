'use client';
import Details from '@/components/contact/steps/infos/step';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FormValues } from '@/components/contact/schema';
import { Dispatch, SetStateAction } from 'react';
import Project from '@/components/contact/steps/project/step';
import Summary from '@/components/contact/steps/summary/step';
import { Button } from '@/common/buttons';
import useIsValidStep from '@/components/contact/isValidStep';
import Buttons from '@/components/contact/steps';
import { Alert, AlertDescription, AlertTitle } from '@/common/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

type FormProps = {
  onSubmit: SubmitHandler<FormValues>;
  sending: boolean;
  failed: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const Form = ({ onSubmit, sending, failed, step, setStep }: FormProps) => {
  const { handleSubmit } = useFormContext<FormValues>();
  const canGoToStep1 = useIsValidStep(['lastName', 'email', 'firstName', 'gender']);
  const canGoToStep2 = useIsValidStep(['message', 'dataProcessing']);
  return (
    <form
      className={'flex flex-col gap-y-5 w-full mt-5 lg:px-20'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'flex gap-y-5 flex-col mt-5'}>
        <Details step={step} />
        <Project step={step} />
        <Summary sending={sending} step={step} setStep={setStep} />
      </div>
      <div className={'gap-y-3 flex flex-col h-full'}>
        {failed && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>
              Echec de l&apos;envoi du message, veuillez réessayer.
            </AlertDescription>
          </Alert>
        )}
        <div className={'flex justify-center mt-10'}>
          {step === 0 && (
            <Buttons isValidStep={canGoToStep1} sending={sending} setStep={setStep} step={step} />
          )}
          {step === 1 && (
            <Buttons isValidStep={canGoToStep2} sending={sending} setStep={setStep} step={step} />
          )}
          {step === 2 && (
            <div className={'flex justify-between gap-x-5 max-w-72'}>
              <Button
                variant={'secondary'}
                type="button"
                disabled={sending}
                onClick={() => setStep(step - 1)}
              >
                Précédent
              </Button>

              <Button
                variant={'secondary'}
                type="submit"
                disabled={(!canGoToStep2 && !canGoToStep1) || sending}
              >
                Envoyer
              </Button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
