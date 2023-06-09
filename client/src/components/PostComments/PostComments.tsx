import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContent } from "../../context/auth";
import { BASE_URL_POSTS } from "../../data/constans.ts";
import PostCommentForm from "../PostCommentForm/PostCommentForm";
import PostCommentFormReply from "../PostCommentFormReply/PostCommentFormReply";
import FirstComment from "../FirstComment/FirstComment";
import SecondComment from "../SecondComment/SecondComment";

type PropsComments = {
    text: string;
    userId: any;
    likes: number;
    _id: any;
    replies: [];
};

const PostComment = ({ postId }: { postId: number | string }) => {
    const {user}: userContent.Props = useContext(AuthContent);
    const [comments, setComments] = useState<PropsComments[]>([]);
    const [newComment, setNewComment] = useState<string>("");

    const getComments = async () => {
        try {
            axios
                .get(`${BASE_URL_POSTS}/${postId}/comments`)
                .then((res) => {
                    setComments(res.data);
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (postId !== undefined) {
            getComments();
        }
    }, [postId]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${BASE_URL_POSTS}/${postId}/comments`,
                {
                    text: newComment,
                    userId: user ? user.id : null,
                }
            );
            setComments(res.data.comments);
            setNewComment("");
        } catch (error) {
            console.log(error);
        }
    };

    const AddLikeComment = async (commentId: number | string) => {
        try {
            const res = await axios.patch(
                `${BASE_URL_POSTS}/${postId}/comments/${commentId}/like`
            );
            setComments(res.data.comments);
        } catch (error) {
            console.log(error);
        }
    };

    const handleReply = async (e: any, commentId: any, text: string) => {
        e.preventDefault();

        try {
            const res = await axios.patch(
                `${BASE_URL_POSTS}/${postId}/comments/${commentId}/reply`,
                { text }
            );
            setComments(res.data.comments);
            e.target.reply.value = "";
        } catch (error) {
            console.log(error);
        }
    };

    const ShowReplyForm = (e: any) => {



        const formReplyHolder = e.target.parentNode.parentNode.parentNode;

        console.log(formReplyHolder, 'formReplyHolder')

        formReplyHolder.classList.toggle("hide-form");
    };

    return (
        <>
            {user ? (
                <PostCommentForm
                    handleSubmit={handleSubmit}
                    setNewComment={setNewComment}
                    newComment={newComment}
                />
            ) : (
                <h1>You must to LoG In</h1>
            )}

            {comments.length > 0 &&
            comments.map((comment: PropsComments) => (
                <div key={comment._id} className="hide-form form-wrap">
                    <FirstComment
                        AddLikeComment={AddLikeComment}
                        comment={comment}
                        ShowReplyForm={ShowReplyForm}
                    />
                    <PostCommentFormReply
                      handleReply={handleReply}
                      comment={comment}
                    />
                    {comment.replies.map((innerComment) => (
                        <SecondComment
                            key={innerComment.slice(0, 15)}
                            innerComment={innerComment}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default PostComment;
