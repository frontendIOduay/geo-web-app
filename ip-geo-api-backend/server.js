const express = require('express');
const sequelize = require('./config'); // Import the Sequelize instance
const authRoutes = require('./routes/authRoutes');
const ipRoutes = require('./routes/ipRoutes');

const app = express();
app.use(express.json()); // Parse JSON requests

app.use('/auth', authRoutes); // Auth-related routes
app.use('/ip', ipRoutes); // IP-related routes

// Sync models with the database and start the server
sequelize.sync({ force: false }) // force: false -> Don't drop tables if they exist
  .then(() => {
    console.log('Database connected and synced');
    app.listen(3001, () => {
      console.log('Server is running on http://localhost:3001');
    });
  })
  .catch((error) => {
    console.error('Failed to sync database:', error);
  });
