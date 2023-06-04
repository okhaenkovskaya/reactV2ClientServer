import { useState, useRef } from "react";
import {Link} from "react-router-dom";
import DashboardEditPostForm from "../DashboardEditPostForm/DashboardEditPostForm.tsx";


type Props = {
    item: PropsPost;
    setPosts: any;
    posts: [];
    setEditPostData: any;
    setShowEditPopup: any;
    checkedPosts: any
    setCheckedPosts:any;
    isCheck: boolean;
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
}) => {
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const postRef = useRef<HTMLInputElement | null>(null);

    const showDeletedPost = (ref :any) => {
        if (ref != null) {
            ref.current.style.backgroundColor = "pink"
        }
    }

    return (
        <div ref={postRef}>

            <h2><Link to={item._id.toString()}>{item.title}</Link></h2>

            <div>
                {item.author}
                    <button
                        type="button"
                        onClick={() => (
                            deletePost(item._id),
                            showDeletedPost(postRef)
                        )}
                    >
                        Delete
                    </button>
                    <button
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