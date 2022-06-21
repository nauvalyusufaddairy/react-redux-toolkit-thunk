import React from "react";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";
export const App = () => {
  return (
    <div>
      <PostList />
      <AddPostForm />
    </div>
  );
};
