import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BodyContainer, Container } from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                console.log('Fetching post with ID:', id);
                const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${id}`;
                console.log('API URL:', apiUrl);
                
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                console.log('Received post data:', data);
                setPost(data);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <>
            <Navigation />
            <BodyContainer>
                <Container top={6}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : !post ? (
                        <div>Post not found</div>
                    ) : (
                        <>
                            <Container leftAlign bottom={4}>
                                <h1>{post.title}</h1>
                                <p style={{ color: '#666', marginTop: '1rem' }}>
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                            </Container>
                            {post.coverImage && (
                                <Container bottom={4}>
                                    <img 
                                        src={post.coverImage} 
                                        alt={post.title}
                                        style={{ 
                                            width: '100%', 
                                            maxWidth: '800px', 
                                            borderRadius: '4px',
                                            margin: '0 auto',
                                            display: 'block'
                                        }} 
                                    />
                                </Container>
                            )}
                            <Container leftAlign>
                                <div style={{ 
                                    lineHeight: '1.6',
                                    fontSize: '1.1rem',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {post.content}
                                </div>
                            </Container>
                        </>
                    )}
                </Container>
            </BodyContainer>
            <Footer />
        </>
    );
};

export default Post; 