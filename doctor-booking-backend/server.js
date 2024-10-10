const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import User, Specialty, and Doctor Models
const User = require('./models/User');
const Specialty = require('./models/Specialty');
const Doctor = require('./models/Doctor');

// Login Route
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch Specialties
app.get('/api/specialties', async (req, res) => {
  try {
    const specialties = await Specialty.find();
    res.json(specialties);
  } catch (error) {
    console.error('Error fetching specialties:', error);
    res.status(500).json({ error: 'Error fetching specialties' });
  }
});

// Fetch Doctors by Specialty
app.get('/api/doctors', async (req, res) => {
  try {
    const { specialty } = req.query;
    const doctors = await Doctor.find({ specialty });
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
