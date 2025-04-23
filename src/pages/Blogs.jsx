import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BodyContainer, Container } from '../components/StyledComponents/StyledComponents';
import Article from '../components/Article/Article';
import Posts from '../posts/Posts';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                // Only set posts if we actually got data
                if (data && data.length > 0) {
                    setPosts(data);
                } else {
                    setPosts(Posts);
                }
            } catch (err) {
                console.error('Error fetching posts:', err);
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
                                    route={isStaticPost ? `/${post.route}` : `/api/posts/${post._id}`}
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