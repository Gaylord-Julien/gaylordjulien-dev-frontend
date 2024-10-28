import { FieldError } from 'react-hook-form';

const ErrorMessage = ({ error }: { error: FieldError }) => {
  return (
    <span className={'text-red-500 font-semibold w-11/12 flex justify-center'}>
      {error.message}
    </span>
  );
};

export default ErrorMessage;
