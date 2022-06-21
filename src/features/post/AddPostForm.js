import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
const AddPostForm = () => {
  const [title, setTile] = useState("");
  const [content, setContent] = useState();
  const onTitleChange = (e) => setTile(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSvePostClicked = () => {
    if (title && content) {
      dis;
    }
  };
  return (
    <section>
      <h2>add new posts </h2>
      <form>
        <label htmlFor="postTitle"></label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
          value={title}
        />
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button>SAVE POST</button>
      </form>
    </section>
  );
};

export default AddPostForm;
