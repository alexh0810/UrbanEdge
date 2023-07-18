import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });

  if (!user) {
    return res.status(401).send('Signin required!');
  }
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
};

export default handler;
