import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const WriteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 300px;
  resize: vertical;
`;

const Button = styled.button`
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

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
  text-align: center;
`;

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const adminPassword = localStorage.getItem('adminPassword');
    if (!adminPassword) {
      history.push('/login');
    }
  }, [history]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('status', 'published');
      
      if (coverImage) {
        formData.append('coverImage', coverImage);
      }

      const adminPassword = localStorage.getItem('adminPassword');
      if (!adminPassword) {
        history.push('/login');
        return;
      }

      console.log('Sending post data:', {
        title,
        content,
        hasImage: !!coverImage
      });

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'x-admin-password': adminPassword,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create post');
      }

      console.log('Post created successfully:', data);
      history.push(`/api/posts/${data._id}`);
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.message || 'Failed to create post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WriteContainer>
      <Title>Write a New Post</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && <ImagePreview src={imagePreview} alt="Preview" />}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </WriteContainer>
  );
};

export default WritePost; 