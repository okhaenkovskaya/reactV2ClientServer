import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BASE_URL_POST } from "../../data/constans.ts";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userID: number;
};

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostProps>({});

  const getPost = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL_POST}/${params.id}`);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
