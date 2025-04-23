import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BodyContainer, Container } from '../components/StyledComponents/StyledComponents';
import Article from '../components/Article/Article';
import Posts from '../posts/Posts';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { buildApiUrl } from '../config/api';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const apiUrl = buildApiUrl('api/posts');
                console.log('Fetching posts from:', apiUrl);
                
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                console.log('Response status:', response.status);
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Error response:', {
                        status: response.status,
                        statusText: response.statusText,
                        body: errorText
                    });
                    throw new Error(`Failed to fetch posts: ${response.status} ${errorText}`);
                }

                const data = await response.json();
                console.log('Received data:', data);
                
                if (data && data.length > 0) {
                    setPosts(data);
                } else {
                    console.log('No posts received, using static posts');
                    setPosts(Posts);
                }
            } catch (err) {
                console.error('Error in fetchPosts:', err);
                setError(err.message);
                setPosts(Posts);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Navigation />
            <BodyContainer>
                <Container top={6}>
                    <Container leftAlign bottom={4}>
                        <h2>All Blog Posts</h2>
                    </Container>
                    {loading ? (
                        <div>Loading...</div>
                    ) : posts.length === 0 ? (
                        <div>No blog posts found.</div>
                    ) : (
                        posts.map((post) => {
                            const isStaticPost = !post._id;
                            return (
                                <Article
                                    key={post._id || post.route}
                                    route={isStaticPost ? `/${post.route}` : `/post/${post._id}`}
                                    thumbnail={post.coverImage || post.image}
                                    title={post.title}
                                    date={post.createdAt ? new Date(post.createdAt).toLocaleDateString() : post.date}
                                    description={post.content ? post.content.substring(0, 150) + '...' : post.description}
                                />
                            );
                        })
                    )}
                </Container>
            </BodyContainer>
            <Footer />
        </>
    );
};

export default Blogs; 