import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {BASE_URL_POSTS} from "../../data/constans.ts"
import style from "./DashboardPost.module.scss"

const DashboardPost = () => {
    const { id } = useParams<string>();
    const [task, setTask] = useState<dashboardPostContent.Post>({
        _id: "",
        title: "",
        body: "",
        status: "",
        tag: [],
        categories: [],
        thumbnail: "",
        likes: 0,
        views: 0,
        createdAt: "",
        comments: [],
    });

    const getTask = async () => {
        try {
            const result = await (
                await fetch(`${BASE_URL_POSTS}/${id}`)
            ).json();

            if(result) {
                setTask(result)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTask();
    }, []);


    return (
        <div>
            <h1 className={style.title}>{task.title}</h1>
            <h2 className={style.status}>{task.status}</h2>
            {task.tag && (
                <ul className={style.tags}>
                    {task.tag.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            )}
            {task.body}
            <h3 className={style.likes}>Likes: {task.likes}</h3>
        </div>
    );
};

export default DashboardPost;
