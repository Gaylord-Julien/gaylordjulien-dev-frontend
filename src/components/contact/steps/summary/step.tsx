'use client';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/components/contact/schema';
import { Dispatch, SetStateAction } from 'react';
import { Pencil1Icon } from '@radix-ui/react-icons';

type DetailsProps = {
  sending: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const Summary = ({ step, setStep, sending }: DetailsProps) => {
  const { getValues } = useFormContext<FormValues>();

  const formValues = getValues();
  const { lastName, firstName, email, message } = formValues;

  return (
    step === 2 && (
      <section className={'flex flex-col gap-y-3'}>
        <h2 className={'text-2xl font-semibold'}>Récapitulatif :</h2>
        <ul className={'grid grid-cols-12 gap-y-5 mt-5'}>
          <li className={'flex gap-x-2 items-center col-span-6 lg:col-span-4'}>
            Nom : {lastName}
            <button disabled={sending} onClick={() => setStep(0)} title={'Modifier mon nom'}>
              <Pencil1Icon />
            </button>
          </li>
          <li className={'flex gap-x-2 items-center col-span-6 lg:col-span-4'}>
            Prénom : {firstName}
            <button disabled={sending} onClick={() => setStep(0)} title={'Modifier mon prénom'}>
              <Pencil1Icon />
            </button>
          </li>
          <li className={'flex gap-x-2 items-center col-span-6 lg:col-span-4'}>
            Email : {email}
            <button disabled={sending} onClick={() => setStep(0)} title={'Modifier mon email'}>
              <Pencil1Icon />
            </button>
          </li>
          <li className={'flex flex-col gap-x-2 items-center col-span-12 mt-10'}>
            Message : <p className={'whitespace-pre'}>« {message} »</p>
            <button
              disabled={sending}
              onClick={() => setStep(1)}
              title={'Modifier le descriptif de mon projet'}
            >
              <Pencil1Icon />
            </button>
          </li>
        </ul>
      </section>
    )
  );
};

export default Summary;
