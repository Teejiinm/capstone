import React, { useState } from 'react';
import './blog.css';
import BlogCard from '../../shared/BlogCard'; // default import
import { blog as blogData } from '../../shared/BlogCard'; // named import of blog data
import { FaSearch, FaPen } from 'react-icons/fa';

const hashtags = ['#City', '#Desert', '#Culture', '#Adventure', '#Food'];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: null });
  const [showWriteBlog, setShowWriteBlog] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  const filteredBlogs = blogData.filter(blog =>
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedTag ? blog.content.includes(selectedTag.replace('#', '')) : true)
  );

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div>
  {/* Search + Write */}
  <div className="top-bar">
    <div className="search-input">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Search Blogs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <button className="write-button" onClick={() => setShowWriteBlog(!showWriteBlog)}>
      Write
    </button>
  </div>

  {/* Hashtag Filters */}
  <div className="hashtag-section">
    {hashtags.map((tag) => (
      <button
        key={tag}
        className={`hashtag-button ${selectedTag === tag ? 'active' : ''}`}
        onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
      >
        {tag}
      </button>
    ))}
  </div>

  {/* Write Blog */}
  {showWriteBlog && (
    <div className="write-blog-section">
      <h2>Write a Blog</h2>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          required
        />
        <input type="file" accept="image/*" />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )}

  {/* Blog List (Only show when "Write" is not active) */}
  {!showWriteBlog && (
    <div className="blog-list">
      {currentBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )}

  {/* Pagination */}
  {!showWriteBlog && (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? 'active' : ''}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )}
</div>

  );
};

export default Blog;
