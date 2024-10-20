import Header from '@/components/header';
import Introduction from '@/components/intro';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden font-inter-tight">
      <Header />
      <Introduction />
    </main>
  );
};

export default Page;
