import React from 'react';
import type { Post } from '../api.ts';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <h3 className={styles.postCardTitle}>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;