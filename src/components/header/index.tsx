import s from './header.module.css';
import { getHeader } from '@/api/header';
import homeImage from '@/public/home_1_1c9d6af75c.svg';
import Image from 'next/image';
import { Button } from '@/common/buttons';
import { ChevronDownIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/dialog';
import ContactForm from '@/components/contact';
import BlurFade from '@/components/ui/blur-fade';

const Header = async () => {
  const { header } = await getHeader();
  return (
    <section
      id="header"
      className="relative mx-auto flex lg:mb-52 lg:mt-96 min-h-screen lg:min-h-0 max-w-7xl flex-col justify-center px-6 text-center md:px-8"
    >
      <div className="relative">
        <header className={'grid grid-cols-1 lg:grid-cols-12 gap-y-10 place-content-center mb-10'}>
          <div className="order-2 lg:order-1 col-span-12 lg:col-start-2 lg:col-span-7 font-inter-tight relative mb-3 mt-5 -translate-y-4 animate-fade-in text-center text-balance lg:text-left bg-gradient-to-br from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl">
            <h1 className={s.title}>{header?.title}</h1>
          </div>

          <div className="hidden lg:block col-span-4 pointer-events-none animate-fade-in order-1 lg:order-2">
            <Image src={homeImage} alt="home" />
          </div>
          <div className={'col-span-6 col-start-4 animate-fade-in text-center order-3'}>
            <BlurFade delay={0.25} inView>
              <p className="text-lg font-extralight text-white">{header?.content}</p>
            </BlurFade>
          </div>
        </header>
        <div className={'flex flex-wrap gap-x-5 gap-y-10 justify-center'}>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Démarrons un projet</Button>
            </DialogTrigger>
            <DialogContent className={'w-11/12 sm:max-w-[425px] lg:max-w-[780px] lg:w-[850px]'}>
              <DialogHeader>
                <DialogTitle>Votre projet commence ici</DialogTitle>
                <DialogDescription className={'pt-5 text-white'}>
                  <ContactForm />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
