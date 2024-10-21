declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_STRAPI_URL: string;
      NEXT_PUBLIC_PROD_URL: string;
      NEXT_PUBLIC_PLAUSIBLE_DOMAIN: string;
    }
  }
}

export {};
