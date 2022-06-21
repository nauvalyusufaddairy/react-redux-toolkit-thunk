import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";
import "./style.css";
const AddPostForm = () => {
  const [title, setTile] = useState("");
  const [content, setContent] = useState();
  const [userId, setUserId] = useState();
  const users = useSelector(selectAllUsers);
  const onTitleChange = (e) => setTile(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  // const onAuthorChanged = (e) => setUserId(e.target.value);
  function onAuthorChanged(e) {
    setUserId(e.target.value);
  }
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTile("");
    setContent("");
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
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
        <label htmlFor="postAuthor"> Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          SAVE POST
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
