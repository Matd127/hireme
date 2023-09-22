import { useState } from "react";

const useTags = (initialTags = []) => {
  const [tags, setTags] = useState(initialTags);
  const [errors, setErrors] = useState("");

  const handleTags = (e) => {
    const tag = e.target.value;

    if (tag.trim().length < 3) {
      setErrors(`It should contain at least 3 characters`)
      return;
    }

    if (tags.some((someTag) => someTag === tag)) {
      setErrors(`${tag} already exists.`);
      return;
    }

    setTags([...tags, tag]);
    e.target.value = "";
    setErrors("")
  };

  const handleTagsEnter = (e) => {
    if (e.key === "Enter") handleTags(e);
  };

  const handleDeleteTag = (tagName) => {
    setTags(tags.filter((tag) => tag !== tagName));
  };

  return { tags, errors, handleTags, handleTagsEnter, handleDeleteTag };
};

export default useTags;
