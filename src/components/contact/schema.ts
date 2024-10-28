import { z } from 'zod';

// Define the schema with conditional phone field based on 'beContacted' selection
export const schema = z.object({
  lastName: z
    .string({ message: 'Ce champ est requis' })
    .min(2, { message: 'Votre nom doit contenir au moins 2 caractères' }),
  firstName: z
    .string({ message: 'Ce champ est requis' })
    .min(2, { message: 'Votre prénom doit contenir au moins 2 caractères' }),
  email: z
    .string({ message: 'Ce champ est requis' })
    .email({ message: 'Veuillez renseigner un email valide' }),
  message: z
    .string({ message: 'Ce champ est requis' })
    .min(10, { message: 'Votre message doit contenir au moins 10 caractères' }),
  dataProcessing: z.boolean().refine((value) => value, {
    message: 'Veillez accepter les conditions de traitement des données',
  }),
});

export type FormValues = z.infer<typeof schema>;
