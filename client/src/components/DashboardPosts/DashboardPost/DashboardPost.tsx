import { useState, useRef } from "react";
import {Link} from "react-router-dom";


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
    setPosts,
    posts,
    setEditPostData,
    setShowEditPopup,
    checkedPosts,
    setCheckedPosts,
}) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const postRef = useRef<HTMLInputElement | null>(null);

    const showDeletedPost = (ref :any) => {
        if (ref != null) {
            ref.current.style.backgroundColor = "pink"
        }
    }

    const editPost = (item: PropsPost) => {
        const editedPost = {
            id: item.id,
            title: item.title,
            author: item.author,
            status: item.status,
            data: item.data,
            body: item.body,
        };

        setEditPostData(editedPost);
        setShowEditPopup(true);
        setIsPopupOpen(false);
    };

    return (
        <div ref={postRef}>

            <h2><Link to={item._id.toString()}>{item.title}</Link></h2>
            <div>{item.title}</div>
            <div>
                <span className={item.status.toLowerCase()}>{item.status}</span>
            </div>
            <div>{item.data}</div>
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
                        onClick={() => editPost(item)}
                    >
                        Edit
                    </button>
            </div>
        </div>
    );
};

export default DashboardPost;
