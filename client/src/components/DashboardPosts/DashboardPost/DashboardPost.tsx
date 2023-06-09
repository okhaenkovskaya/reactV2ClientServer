import { useState, useRef } from "react";
import {Link} from "react-router-dom";

import style from "./DashboardPost.module.scss";
import DashboardEditPostForm from "../DashboardEditPostForm/DashboardEditPostForm.tsx";


type Props = {
    item: PropsPost;
    deletePost: (id: string) => void;
    updatePost: (id: string) => void;
};

type PropsPost = {
    id: string | number,
    title: string,
    author: string,
    status: string,
    data: any,
    body: string,
};

const DashboardPost = ({
    item,
    deletePost,
    updatePost
}: Props) => {
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const postRef = useRef<HTMLInputElement | null>(null);

    const showDeletedPost = (ref :any) => {
        if (ref != null) {
            ref.current.style.backgroundColor = "pink"
        }
    }

    return (
        <div ref={postRef}>

            <h2 className={style.title}><Link to={item._id.toString()}>{item.title}</Link></h2>

            <div>
                {item.author}
                    <button
                        className={style.button}
                        type="button"
                        onClick={() => (
                            deletePost(item._id),
                            showDeletedPost(postRef)
                        )}
                    >
                        Delete
                    </button>
                    <button
                        className={style.button}
                        type="button"
                        onClick={() => setShowEditForm(!showEditForm)}
                    >
                        Edit
                    </button>
            </div>

            {showEditForm && <DashboardEditPostForm
              setShowEditForm={setShowEditForm}
              updatePost={updatePost}
              item={item} />}
        </div>
    );
};

export default DashboardPost;
