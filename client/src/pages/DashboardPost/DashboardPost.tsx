import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {BASE_URL_POSTS} from "../../data/constans.ts"
import style from "./DashboardPost.module.scss"

type Post = {
    _id: any;
    title: string;
    body: string;
    status: string;
    tag: [];
    categories: [];
    thumbnail: string;
    likes: number;
    views: number;
    createdAt: any;
    comments: []
};

type PostParams = {
    id: string;
};

const DashboardPost = () => {
    const { id } = useParams<PostParams>();
    const [task, setTask] = useState<Post>({});

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
            {task.body}
        </div>
    );
};

export default DashboardPost;
