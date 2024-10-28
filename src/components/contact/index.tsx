'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormValues, schema } from '@/components/contact/schema';
import sendMessage from '@/components/contact/sendMessage';
import Form from '@/components/contact/form';
import FormBreadCrumb from '@/components/contact/breadCrumb';
import Success from '@/components/contact/success';

const ContactForm = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    // scroll to id "infos" on message sent
    if (sent) {
      const element = document.getElementById('infos');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sent]);

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    const { success } = await sendMessage(data);
    if (success) {
      setSent(true);
      setSending(false);
      setFailed(false);
    } else {
      setSent(false);
      setFailed(true);
      setSending(false);
    }
  };

  if (sent) {
    return <Success />;
  }

  return (
    <FormProvider {...methods}>
      <h2 className={'text-lg font-extralight'}>
        Dites m&apos;en plus sur votre projet et je vous recontacterai dans les plus brefs délais.
      </h2>
      <FormBreadCrumb step={step} setStep={setStep} />
      <Form onSubmit={onSubmit} sending={sending} failed={failed} step={step} setStep={setStep} />
    </FormProvider>
  );
};

export default ContactForm;
