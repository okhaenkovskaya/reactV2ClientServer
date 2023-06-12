import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, FormButton } from "../Form";

type Props = {
    handleSubmit: (e: any) => void;
    setNewComment: (e: string) => void;
};

const PostCommentForm = ({handleSubmit, setNewComment}: Props) => {

    return (
        <Form submitFunction={handleSubmit}>
            <h2>Add Comment</h2>
            <ReactQuill theme="snow"
                        value=""
                        onChange={(value: string) => setNewComment(value)} />

            <FormButton buttonText="Add Comment" />
        </Form>
    )
};

export default PostCommentForm;
