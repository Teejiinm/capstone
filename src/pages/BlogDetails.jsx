import React, { useState } from "react";
import '../styles/blog-details.css';
import { useParams } from 'react-router-dom';
import { blog } from '../shared/BlogCard';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa'; // Font Awesome 아이콘 추가
import { Link } from 'react-router-dom';
import { shuffle } from 'lodash'; // lodash 라이브러리에서 shuffle 함수 가져오기

const BlogDetails = () => {
  const { id } = useParams();
  const selectedBlog = blog.find(item => item.id === parseInt(id));
  const shuffledBlogs = [...blog].sort(() => Math.random() - 0.5);

  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState('');

  if (!selectedBlog) return <p className="error-message">Blog not found</p>;

  const handleLike = () => setLiked(!liked);
  const handleSubmit = () => {
    if (newComment.trim()) {
      alert(`Comment submitted: ${newComment}`);
      setNewComment('');
    }
  };

  return (
    <div className="blog-details-container">
      <img src={selectedBlog.image} alt={selectedBlog.title} className="top-image" />
      <h1 className="blog-title">{selectedBlog.title}</h1>
      <p className="release-date">
        • {new Date(selectedBlog.date).toLocaleDateString('en-US', {
          day: 'numeric', month: 'short', year: 'numeric'
        })}
      </p>

      <div className="blog-content">
        {selectedBlog.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* 하트 + 댓글 아이콘 + 댓글 입력창 + 제출 버튼 */}
      <div className="interaction-bar">
        <FaHeart
          className={`icon ${liked ? 'liked' : ''}`}
          onClick={handleLike}
          title="Like"
        />
        <FaRegCommentDots className="icon" title="Comment" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="similar-blogs">
      <h2>Similar Blogs</h2>
      {shuffledBlogs
        .filter(item => item.id !== selectedBlog.id)  // Avoid showing the selected blog
        .slice(0, 2)  // Limit to 2 random blogs
        .map(item => (
          <div key={item.id} className="similar-blog-item">
            <img src={item.image} alt={item.title} className="similar-blog-image"/>
            <div className="blog-info">
              <h4>{item.title}</h4>
              <p>{item.content.split(' ').slice(0, 20).join(' ')}...</p>
              {/* Read more button aligned to the right */}
              <button className="read-more">
                <Link to={`/blogs/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default BlogDetails;
