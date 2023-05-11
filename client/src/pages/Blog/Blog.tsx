import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL_POST } from "../../data/constans.ts";
import { PostItem, PostList } from "../../components/PostList";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userID: number;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(BASE_URL_POST);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Blog Page</h1>
      <PostList>
        {posts.length > 0 &&
          posts.map((postItem) => (
            <PostItem
              title={postItem.title}
              body={postItem.body}
              id={postItem.id}
              key={postItem.id}
            />
          ))}
      </PostList>
    </div>
  );
};

export default BlogPage;
