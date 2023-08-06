import db from '@/utils/db';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });

  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('Signin required!');
  }

  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  console.log(users);
  res.send(users);
};

export default handler;
