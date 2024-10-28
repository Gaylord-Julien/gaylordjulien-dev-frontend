import { RocketIcon } from '@radix-ui/react-icons';

const Success = () => {
  return (
    <div className={'mb-5'}>
      <h2 className={'flex items-center gap-x-5 tracking-tighter text-2xl mb-5'}>
        Message bien reçu ! <RocketIcon />
      </h2>
      <p>Merci de m&apos;avoir contacté, on se reparle très vite.</p>
    </div>
  );
};

export default Success;
