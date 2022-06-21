import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import "./style.css";
const AddPostForm = () => {
  const [title, setTile] = useState("");
  const [content, setContent] = useState();
  const onTitleChange = (e) => setTile(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTile("");
    setContent("");
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
        <button type="button" onClick={onSavePostClicked}>
          SAVE POST
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
