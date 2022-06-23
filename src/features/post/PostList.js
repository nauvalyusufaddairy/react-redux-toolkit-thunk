import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import "./style.css";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const post = useSelector(selectAllPosts);
  const orderdPost = post.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderedPost = orderdPost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
