import { useState } from "react";

const useTags = (initialTags = []) => {
  const [tags, setTags] = useState(initialTags);

  const handleTags = (e) => {
    const tag = {
      id: Date.now(),
      value: e.target.value,
    };

    if (tag.value.trim().length < 3) {
      return;
    }

    setTags([...tags, tag]);
    e.target.value = "";
  };

  const handleTagsEnter = (e) => {
    if (e.key === "Enter") handleTags(e);
  };

  const handleDeleteTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return { tags, handleTags, handleTagsEnter, handleDeleteTag };
};

export default useTags;