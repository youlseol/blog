import React from 'react';
import { PlanetData } from '../data/planetData';
import '../styles/PostList.css';

interface PostListProps {
  planet: PlanetData;
  onBackClick: () => void;
}

const PostList: React.FC<PostListProps> = ({ planet, onBackClick }) => {
  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <button onClick={onBackClick} className="back-button">← Back to Solar System</button>
        <h2 className="category-title">Category: {planet.category}</h2>
        <div className="planet-icon" style={{ backgroundImage: `url(${planet.texture})` }}></div>
      </div>
      <div className="posts-grid">
        {planet.posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p className="post-meta">By {post.author} on {post.date}</p>
            <p className="post-excerpt">{post.excerpt}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;