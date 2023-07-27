import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Alex',
      email: 'admin@urbanedge.com',
      password: bcrypt.hashSync('081097'),
      isAdmin: true,
    },
    {
      name: 'Test User 1',
      email: 'user1@mail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'iPhone 14 Pro Max',
      slug: 'iphone-14-pro-max',
      category: 'Phones',
      image: '/images/iphone14promax.jpeg',
      price: 900,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 9,
      countInStock: 20,
      description: 'The latest iPhone model by Apple',
      isFeatured: true,
      banner: '/images/banner1.png',
    },
    {
      name: 'Smart TV 2000X',
      slug: 'smart-tv-2000x',
      category: 'Electronics',
      image: '/images/smart-tv-2000x.webp',
      price: 799.99,
      brand: 'XYZ Electronics',
      rating: 4.2,
      numReviews: 23,
      countInStock: 5,
      description:
        'Experience the ultimate entertainment with our Smart TV 2000X. Enjoy stunning picture quality and access to a wide range of smart features.',
      isFeatured: true,
      banner: '/images/banner2.png',
    },
    {
      name: 'Laptop Pro 5000',
      slug: 'laptop-pro-5000',
      category: 'Electronics',
      image: '/images/laptop-pro-5000.jpeg',
      price: 1299.99,
      brand: 'TechMaster',
      rating: 4.8,
      numReviews: 35,
      countInStock: 8,
      description:
        'The Laptop Pro 5000 offers high performance and sleek design, perfect for all your computing needs.',
    },
    {
      name: 'Gaming Console Elite',
      slug: 'gaming-console-elite',
      category: 'Electronics',
      image: '/images/gaming-console-elite.avif',
      price: 499.99,
      brand: 'GameZone',
      rating: 4.9,
      numReviews: 42,
      countInStock: 3,
      description:
        'Experience the next level of gaming with our Gaming Console Elite. Get ready for immersive gameplay and stunning graphics.',
    },
    {
      name: 'Bluetooth Speaker B200',
      slug: 'bluetooth-speaker-b200',
      category: 'Electronics',
      image: '/images/bluetooth-speaker-b200.avif',
      price: 79.99,
      brand: 'SoundWave',
      rating: 4.2,
      numReviews: 8,
      countInStock: 25,
      description:
        'Enjoy your favorite tunes on the go with our portable Bluetooth Speaker B200. Compact and powerful, it delivers impressive sound quality.',
    },
    {
      name: 'Smart Watch S1',
      slug: 'smart-watch-s1',
      category: 'Electronics',
      image: '/images/smart-watch-s1.png',
      price: 199.99,
      brand: 'TechWear',
      rating: 4.6,
      numReviews: 27,
      countInStock: 12,
      description:
        'Stay connected and track your fitness goals with our Smart Watch S1. It offers a range of smart features and a stylish design.',
    },
  ],
};

export default data;
