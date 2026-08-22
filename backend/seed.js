require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    // Check if admin exists
    const adminExists = await User.findOne({ email: 'admin@safety.com' });
    if (!adminExists) {
      await User.create({
        email: 'admin@safety.com',
        password: 'password123',
        role: 'admin'
      });
      console.log('Created default admin user: admin@safety.com / password123');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
