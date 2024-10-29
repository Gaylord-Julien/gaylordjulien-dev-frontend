'use server';

import { FormValues } from '@/components/contact/schema';

const sendMessage = async ({ lastName, email, message, firstName, gender, phone }: FormValues) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN_SEND_MESSAGE}`,
      },
      body: JSON.stringify({
        data: {
          firstName,
          lastName,
          email,
          phone,
          message,
          gender,
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true };
    } else {
      console.error('Failed to send message', response);
      return { success: false, message: data?.error?.message };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { success: false };
  }
};

export default sendMessage;
