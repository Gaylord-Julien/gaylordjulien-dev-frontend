import s from './header.module.css';
import { getHeader } from '@/api/header';
import homeImage from '@/public/home_1_1c9d6af75c.svg';
import Image from 'next/image';
import { Button } from '@/common/buttons';
import { ChevronDownIcon } from 'lucide-react';

const Header = async () => {
  const { header } = await getHeader();
  return (
    <section
      id="hero"
      className="relative mx-auto flex lg:mb-52 lg:mt-96 min-h-screen lg:min-h-0 max-w-7xl flex-col justify-center px-6 text-center md:px-8"
    >
      <div className="relative">
        <header className={'grid grid-cols-1 lg:grid-cols-12 gap-y-10 place-content-center mb-10'}>
          <div className="col-span-10 font-inter-tight relative mb-3 mt-5 -translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl">
            <h1 className={s.title}>{header?.title}</h1>
          </div>
          <div className="pointer-events-none col-span-2 animate-fade-in">
            <Image src={homeImage} alt="home" />
          </div>
          <div className={'col-span-6 col-start-4 animate-fade-in text-center'}>
            <p className="text-lg font-light text-white">{header?.content}</p>
          </div>
        </header>
        <div className={'flex flex-wrap gap-x-5 gap-y-10 justify-center'}>
          <a
            href="mailto:hello@gaylordjulien.dev?subject=Besoin%20d'information&body=Bonjour%2C%0A%0A"
            className={'animate-fade-in'}
          >
            <Button size="lg">Démarrons un projet</Button>
          </a>
          <a href="#services" className={'animate-fade-in lg:hidden'}>
            <Button variant="outline" size="lg">
              En savoir plus <ChevronDownIcon className={'w-6 h-6 ml-2'} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
