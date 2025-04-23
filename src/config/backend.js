// Backend configuration
const config = {
    baseUrl: 'https://custom-blog.onrender.com',
    endpoints: {
        posts: '/api/posts',
        post: (id) => `/api/posts/${id}`,
        verifyPassword: '/api/verify-password'
    }
};

// Helper function to get full URL
export const getBackendUrl = (endpoint) => {
    const url = `${config.baseUrl}${endpoint}`;
    console.log('Backend URL:', url); // Debug log
    return url;
};

export default config;