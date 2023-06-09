import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {BASE_URL_POSTS} from "../../data/constans.ts";
import style from "./DashboardPost.module.scss";
import Button from "../../components/Button";
import PostComment from "../../components/PostComments";

const DashboardPost = () => {
    const { id } = useParams<string>();
    const [view, setView] = useState<number | string>(0);
    const [task, setTask] = useState<dashboardPostContent.Post>({
        _id: "",
        title: "",
        body: "",
        status: "",
        tag: [],
        categories: [],
        thumbnail: "",
        likes: 0,
        views: view,
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

    const fetchView = () => {
        axios
            .patch(`${BASE_URL_POSTS}/${id}/viewcount`)
            .then((res) => {
                setView(res.data.views)
            })
            .catch((error) => console.log(error));
    };

    const addLike = () => {
        axios
            .put(`${BASE_URL_POSTS}/${id}/like`)
            .then((res) => setTask(res.data))
            .catch((error) => console.log(error));
    };

    const removeLike = () => {
        axios
            .delete(`${BASE_URL_POSTS}/${id}/like`)
            .then((res) => setTask(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getTask();
        fetchView();
    }, []);


    return (
        <div>
            <h1 className={style.title}>{task.title}</h1>
            <img className={style.image} src={task.thumbnail} alt={task.title} />
            {task.tag.length > 0 && (
                <>
                    <h3>Tags</h3>
                    <ul className={style.tags}>
                        {task.tag.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                </>
            )}

            {task.categories.length > 0 && (
                <>
                    <h3>Categories</h3>
                    <ul className={style.tags}>
                        {task.categories.map(category => <li key={category}>{category}</li>)}
                    </ul>
                </>
            )}
            <div dangerouslySetInnerHTML={{ __html: task.body }} ></div>
            <h3 className={style.likes}>Likes: {task.likes} ---- Views: {task.views}</h3>

            <h3>
                <Button onClick={addLike}>Add likes: {task.likes}</Button>
                <Button onClick={removeLike}>Delete likes: {task.likes}</Button>
            </h3>

            <PostComment postId={id} />
        </div>
    );
};

export default DashboardPost;
