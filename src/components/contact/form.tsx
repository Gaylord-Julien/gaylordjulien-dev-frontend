'use client';
import Details from '@/components/contact/steps/infos/step';
import ErrorMessage from '@/components/contact/errorMessage';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FormValues } from '@/components/contact/schema';
import { Dispatch, SetStateAction } from 'react';
import Project from '@/components/contact/steps/project/step';
import Summary from '@/components/contact/steps/summary/step';
import { Button } from '@/common/buttons';
import useIsValidStep from '@/components/contact/isValidStep';
import Buttons from '@/components/contact/steps';

type FormProps = {
  onSubmit: SubmitHandler<FormValues>;
  sending: boolean;
  failed: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const Form = ({ onSubmit, sending, failed, step, setStep }: FormProps) => {
  const { handleSubmit } = useFormContext<FormValues>();
  const canGoToStep1 = useIsValidStep(['lastName', 'email', 'firstName']);
  const canGoToStep2 = useIsValidStep(['message', 'dataProcessing']);
  return (
    <form
      className={
        'grid grid-cols-1 grid-rows-2 grid-flow-row-dense gap-y-5 w-full mt-5 h-[600px] lg:px-20'
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'row-start-1 flex gap-y-5 flex-col mt-5'}>
        <Details step={step} />
        <Project step={step} />
        <Summary sending={sending} step={step} setStep={setStep} />
      </div>
      <div className={'row-start-2 gap-y-3 flex flex-col'}>
        {failed && (
          <ErrorMessage
            error={{
              message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
              type: 'submit',
            }}
          />
        )}
        <div className={'flex justify-center'}>
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
