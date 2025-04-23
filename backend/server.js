const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const Post = require('./models/Post');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure multer for file uploads
const upload = multer();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple password verification middleware
const verifyPassword = (req, res, next) => {
  const providedPassword = req.headers['x-admin-password'];
  if (providedPassword === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Routes
// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
app.post('/api/posts', verifyPassword, upload.single('coverImage'), async (req, res) => {
  try {
    const { title, content, status } = req.body;
    let coverImage = null;

    if (req.file) {
      // Convert the buffer to base64 string
      coverImage = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    const post = new Post({
      title,
      content,
      coverImage,
      status: status || 'draft'
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update a post (protected)
app.put('/api/posts/:id', verifyPassword, async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a post (protected)
app.delete('/api/posts/:id', verifyPassword, async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Password verification endpoint
app.post('/api/verify-password', (req, res) => {
  const { password } = req.body;
  console.log('Received password:', password);
  console.log('Expected password:', process.env.ADMIN_PASSWORD);
  
  if (password === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ message: 'Password verified' });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 