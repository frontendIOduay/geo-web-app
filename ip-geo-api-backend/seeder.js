const bcrypt = require('bcryptjs');
const User = require('./models/User');

const seedUser = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);
  await User.create({ email: 'test@example.com', password: hashedPassword });
};

seedUser().then(() => console.log('User seeded.'));
