import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { BodyContainer, Container, Button } from "../StyledComponents/StyledComponents";
import Article from '../Article/Article';
import Posts from '../../posts/Posts';

const HomeArticles = () => {
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
                // If there's an error, use static posts
                setPosts(Posts);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error:', error);
    }

    // Show only the first 3 posts
    const displayPosts = posts.slice(0, 3);

    return (
        <BodyContainer>
            <Container top={0}>
                <Container leftAlign bottom={4}>
                    <h2>Featured Articles</h2>
                </Container>
                {displayPosts.map((post) => {
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
                })}
                <Container top={4} center>
                    <Button onClick={() => history.push('/blogs')}>
                        View All Blogs
                    </Button>
                </Container>
            </Container>
        </BodyContainer>
    );
};

export default HomeArticles;
