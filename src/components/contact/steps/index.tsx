import { Button } from '@/common/buttons';
import { Dispatch, SetStateAction } from 'react';

type ButtonsProps = {
  isValidStep: boolean;
  sending: boolean;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
};

const Buttons = ({ isValidStep, sending, setStep, step }: ButtonsProps) => {
  return (
    <div className={'flex justify-between gap-x-5 max-w-72'}>
      {step !== 0 && step !== 2 && (
        <Button type="button" disabled={sending} onClick={() => setStep(step - 1)}>
          Précédent
        </Button>
      )}
      {step < 2 && (
        <Button
          type="button"
          hidden={step === 2}
          disabled={sending || !isValidStep}
          variant={'secondary'}
          onClick={() => {
            if (step <= 2) {
              setStep(step + 1);
            }
          }}
        >
          Suivant
        </Button>
      )}
    </div>
  );
};

export default Buttons;
