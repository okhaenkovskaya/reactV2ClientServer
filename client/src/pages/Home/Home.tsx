import { useEffect, useState } from "react";
import axios from "axios";

import heroData from "../../data/hero.json";
import CTAData from "../../data/CTA.json";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";
import { PostList, PostItem } from "../../components/PostList";
import { BASE_URL_POST } from "../../data/constans.ts";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userID: number;
};

const HomePage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(BASE_URL_POST);
      setPosts(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Hero
        title={heroData.title}
        button={heroData.button}
        image={heroData.image}
      />

      <PostList>
        {posts.length > 0 &&
          posts.map((postItem) => (
            <PostItem
              title={postItem.title}
              body={postItem.body}
              id={`/blog/${postItem.id}`}
              key={postItem.id}
            />
          ))}
      </PostList>

      <CTA title={CTAData.title} body={CTAData.body} button={CTAData.button} />
    </>
  );
};

export default HomePage;
