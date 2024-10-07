import React from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from './image.png'; // Adjust the path if necessary

const Login = () => {
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
        <Typography variant="h4" gutterBottom>Doctor Booking - Login</Typography>
        

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
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
