import { Alert, AlertDescription, AlertTitle } from '@/common/alert';
import { MailIcon } from 'lucide-react';

const Success = () => {
  return (
    <div className={'mb-5'}>
      <h2 className={'flex items-center gap-x-5 tracking-tighter text-2xl mb-5'}>
        Message bien reçu
      </h2>
      <Alert>
        <MailIcon className="h-4 w-4" />
        <AlertTitle>Merci !</AlertTitle>
        <AlertDescription>Je reviens vers vous dans les plus brefs délais.</AlertDescription>
      </Alert>
    </div>
  );
};

export default Success;
