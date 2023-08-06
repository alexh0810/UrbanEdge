import User from '@/models/User';
import db from '@/utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('Signin required!');
  }
  if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed!' });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    if (user.email === 'admin@urbanedge.com') {
      return res.status(400).send({ message: 'Cannot delete admin' });
    }
    await user.deleteOne();
    await db.disconnect();
    res.send({ message: 'User deleted successfully!' });
  } else {
    await db.disconnect();
    res.status(400).send({ message: 'User not found!' });
  }
};
export default handler;
