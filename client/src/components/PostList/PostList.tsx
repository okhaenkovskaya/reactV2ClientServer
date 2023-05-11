import React from "react";
import style from "./PostList.module.scss";

type PostListProps = {
  children: React.ReactNode;
};

const PostList = ({ children }: PostListProps) => {
  return <div className={style.postList}>{children}</div>;
};

export default PostList;
