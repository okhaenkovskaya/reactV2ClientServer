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

const DashboardPost = () => {
    const { id } = useParams<string>();
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


    console.log(task, 'task')

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
