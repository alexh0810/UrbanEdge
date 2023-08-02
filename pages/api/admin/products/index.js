import Product from '@/models/Product';
import db from '@/utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });

  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('Admin signin required!');
  }

  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed!' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};
export default handler;