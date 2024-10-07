import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from './image.png'; // Adjust the path if necessary

const Register = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex', // Use flexbox to center content
        justifyContent: 'center', // Center horizontally
        alignItems: 'center' // Center vertically
      }}
    >
      <Container 
        maxWidth="xs" 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: add a white background with some transparency
          borderRadius: '8px', // Optional: add rounding to the corners
          padding: '20px' // Optional: add some padding
        }}
      >
        <Typography variant="h4" gutterBottom>Doctor Booking - Register</Typography>
        

        <TextField 
          label="Full Name" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          required 
        />
        <TextField 
          label="Email" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          required 
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          type="password" 
          margin="normal" 
          fullWidth 
          required 
        />
        <TextField 
          label="Confirm Password" 
          variant="outlined" 
          type="password" 
          margin="normal" 
          fullWidth 
          required 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{ marginTop: '20px' }}
        >
          Register
        </Button>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Register;
