import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {BASE_URL_POSTS} from "../../data/constans.ts"
import style from "./Dashboard.module.scss"

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
const Dashboard = () => {
    const [tasks, setTasks] = useState<Post[]>([]);

    const getTasks = async () => {
        try {
            const result = await (
                await fetch(`${BASE_URL_POSTS}`)
            ).json();

            if(result) {
                setTasks(result.data)
            }
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <h1 className={style.title}>List of Posts</h1>
            {tasks.length > 0 && tasks.map((item: Post) => (
                <div className={style.post} key={item._id}>
                    <h2><Link to={item._id.toString()}>{item.title}</Link></h2>
                    {item.body}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
