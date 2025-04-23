// API Configuration
const API_BASE_URL = 'https://custom-blog.onrender.com';

// Debug logging
console.log('API Configuration:', {
    envUrl: process.env.REACT_APP_API_URL,
    usingUrl: API_BASE_URL
});

// Helper function to build API URLs
export const buildApiUrl = (endpoint) => {
    const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    console.log('Building API URL:', url); // Debug log
    return url;
}; 