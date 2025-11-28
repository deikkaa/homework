import React from 'react';
import { useGetPostsQuery } from '../../entities/post/api';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

const PostList: React.FC = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <div className={styles.PostList}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;