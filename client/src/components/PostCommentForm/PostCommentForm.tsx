import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, FormButton } from "../Form";

type Props = {
    handleSubmit: (e: any) => void;
    setNewComment: (e: any) => void;
    newComment: any;
};

const PostCommentForm = ({
                             handleSubmit,
                             setNewComment,
                             newComment,
                         }: Props) => (
    <Form submitFunction={handleSubmit}>
        <h2>Add Comment</h2>

        <ReactQuill theme="snow"
                    value={newComment}
                    onChange={(value: string) => setNewComment(value)} />

        <FormButton>Add Comment</FormButton>
    </Form>
);

export default PostCommentForm;
