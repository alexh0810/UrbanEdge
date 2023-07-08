import Order from '@/models/Order';
import db from '@/utils/db';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });
  console.log(user);

  if (!user) {
    return res.status(401).send('Signin required!');
  }

  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};

export default handler;
