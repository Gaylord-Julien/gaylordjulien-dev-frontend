import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/common/breadcrumb';
import { Dispatch, SetStateAction } from 'react';
import useIsValidStep from '@/components/contact/isValidStep';
import { clsx } from 'clsx';
import { CheckIcon } from '@radix-ui/react-icons';

type FormBreadCrumbProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const FormBreadCrumb = ({ step, setStep }: FormBreadCrumbProps) => {
  const canGoToStep1 = useIsValidStep(['lastName', 'email', 'firstName']);
  const canGoToStep2 = useIsValidStep(['message', 'dataProcessing']);
  return (
    <Breadcrumb className={'mt-10'}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <button
            className={clsx('disabled:cursor-not-allowed flex gap-x-2 items-center', {
              'text-white font-semibold': step === 0,
            })}
            type="button"
            onClick={() => {
              if (step > 0) {
                setStep(0);
              }
            }}
          >
            1. Vos infos {canGoToStep1 && <CheckIcon />}
          </button>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <button
            className={clsx('disabled:cursor-not-allowed flex gap-x-2 items-center', {
              'text-white font-semibold': step === 1,
            })}
            disabled={!canGoToStep1}
            type="button"
            onClick={() => setStep(1)}
          >
            2. Votre projet {canGoToStep2 && <CheckIcon />}
          </button>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <button
            className={clsx('disabled:cursor-not-allowed flex gap-x-2 items-center', {
              'text-white font-semibold': step === 2,
            })}
            disabled={!canGoToStep2 || !canGoToStep1}
            type="button"
            onClick={() => setStep(2)}
          >
            3. Récapitulatif {step === 2 && <CheckIcon />}
          </button>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default FormBreadCrumb;
