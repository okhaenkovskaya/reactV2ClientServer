import {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, FormButton } from "../Form";

type Props = {
    handleReply: (e: Event, id: string | number, value: string) => void;
    comment: PropsComment
};

type PropsComment = {
    _id: string;
    userId: string;
    text: string;
    replies: [];
    likes: string | number;
};

const PostCommentFormReply = ({ handleReply, comment }: Props) => {
    const [newComment, setNewComment] = useState<string>('');

    return (
        <Form
            classes="reply-form"
            submitFunction={(e: Event) => handleReply(e, comment._id, newComment)}
        >
            <ReactQuill theme="snow"
                        value={newComment}
                        onChange={(value: string) => setNewComment(value)} />
            <FormButton buttonText="Add Comment Reply" />
        </Form>
    )
};

export default PostCommentFormReply;
