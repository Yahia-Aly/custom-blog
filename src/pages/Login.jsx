import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const LoginForm = styled.form`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #2E7D32;  /* Medium green */
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const RoleButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => props.selected ? '#2E7D32' : 'transparent'};
  color: ${props => props.selected ? 'white' : props.theme.colors.text};
  border: 2px solid #2E7D32;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.selected ? '#1B5E20' : '#81C784'};
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #2E7D32;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1B5E20;
  }

  &:disabled {
    background-color: #A5D6A7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #C62828;
  margin-top: 1rem;
  text-align: center;
`;

const Login = () => {
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Clear any existing user role when the login page loads
    localStorage.removeItem('userRole');
    localStorage.removeItem('adminPassword');
  }, []);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (role === 'reader') {
      localStorage.setItem('userRole', 'reader');
      window.location.href = '/';
    } else if (role === 'admin') {
      if (!password) {
        setError('Please enter the admin password');
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/verify-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });

        if (response.ok) {
          localStorage.setItem('userRole', 'admin');
          localStorage.setItem('adminPassword', password);
          window.location.href = '/';
        } else {
          const data = await response.json();
          setError(data.message || 'Invalid admin password');
        }
      } catch (err) {
        setError('Failed to connect to server. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Navigation page="login" />
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Welcome to the Blog</Title>
          <Subtitle>Please select your role to continue</Subtitle>
          
          <RoleButton
            type="button"
            selected={role === 'reader'}
            onClick={() => handleRoleSelect('reader')}
          >
            I'm a Reader
          </RoleButton>
          
          <RoleButton
            type="button"
            selected={role === 'admin'}
            onClick={() => handleRoleSelect('admin')}
          >
            I'm the Admin
          </RoleButton>

          {role === 'admin' && (
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Continue'}
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginForm>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login; 