// "use client";
import AllPost from "@/components/posts/page";
import React, { Suspense } from "react";

const PostPage = () => {
  const pagePromises = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <AllPost pagePromises={pagePromises}></AllPost>
      </Suspense>
    </div>
  );
};

export default PostPage;
