import React, { use } from "react";

const AllPost = ({ pagePromises }) => {
  const posts = use(pagePromises);
  console.log(posts);
  return (
    <div>
      <h2>all post is here: {posts.length}</h2>
    </div>
  );
};

export default AllPost;
