import { useState, useRef } from "react";
import {Link} from "react-router-dom";

import style from "./DashboardPost.module.scss";
import DashboardEditPostForm from "../DashboardEditPostForm/DashboardEditPostForm.tsx";
import Button from "../../Button";

type Props = {
    item: dashboardPostContent.Post;
    deletePost: (id: string) => void;
    updatePost: (id: dashboardPostContent.Post) => void;
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
                <Button onClick={() => (
                    deletePost(item._id as string),
                    showDeletedPost(postRef)
                )}>
                    Delete
                </Button>

                <Button
                    onClick={() => setShowEditForm(!showEditForm)}
                >
                    Edit
                </Button>
            </div>

            {showEditForm && <DashboardEditPostForm
              setShowEditForm={setShowEditForm}
              updatePost={updatePost}
              item={item} />}
        </div>
    );
};

export default DashboardPost;
