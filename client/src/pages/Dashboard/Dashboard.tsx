import { useState, useEffect } from "react";

import {BASE_URL_POSTS} from "../../data/constans.ts"
import style from "./Dashboard.module.scss"
import DashboardPost from "../../components/DashboardPosts/DashboardPost";

const Dashboard = () => {
    const [posts, setPosts] = useState<dashboardPostContent.Post[]>([]);
    const [message, setMessage] = useState<string >("");

    const getPosts = async () => {
        try {
            const result = await (
                await fetch(`${BASE_URL_POSTS}`)
            ).json();

            if(result) {
                setPosts(result.data)
                setMessage('')
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id: string) => {
        try {
            const result = await (
                await  fetch(`${BASE_URL_POSTS}/${id}`, {method: "DELETE",})
            ).json();

            if(result) {
                setMessage(result.message)
                const timer = setTimeout(() => {
                    getPosts();
                }, 1000);
                return () => clearTimeout(timer);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1 className={style.title}>List of Posts</h1>
            <span>{message}</span>
            {posts.length > 0 && posts.map((item: dashboardPostContent.Post) => (
                <div className={style.post} key={item._id}>
                    <DashboardPost
                        deletePost={deletePost}
                        key={item._id}
                        item={item} />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
