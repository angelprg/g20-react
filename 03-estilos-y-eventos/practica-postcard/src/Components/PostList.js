import React from "react";
import posts from "../data/posts";
import users from "../data/users";
import PostCard from "./PostCard";

const PostList = () => {
  return (
    <div>
      <h1>Post List</h1>
      <div>
        {posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              username={user.name}
              email={user.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
