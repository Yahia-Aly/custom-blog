// Default to the production URL if environment variable is not set
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://custom-blog-backend.onrender.com';

// Helper function to build API URLs
export const buildApiUrl = (endpoint) => {
    return `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}; 