import style from "./FirstComment.module.scss";
import Button from "../Button";

type Props = {
    comment: PropsComment;
    AddLikeComment: (id: any) => void;
    ShowReplyForm: (id: any) => void;
};

type PropsComment = {
    _id: any;
    text: string;
    likes: any;
    userId: string;
    replies: [];
};

const FirstComment = ({ AddLikeComment, comment, ShowReplyForm }: Props) => {
    return (
        <div className={style.comment}>
            <div dangerouslySetInnerHTML={{__html: comment.text}}></div>

            <div className="frame">
                <Button
                    onClick={() => AddLikeComment(comment._id)}
                >
                    {comment.likes}
                </Button>
                <Button
                    onClick={(e: Event) => ShowReplyForm(e)}
                >
                    Reply
                </Button>
            </div>
        </div>
    )
};

export default FirstComment;
