import style from "./SecondComment.module.scss";
const SecondComment = ({ innerComment }: {innerComment: string}) => {

    return (
        <>
            {innerComment.length > 0 && (
                <div className={style.comment} dangerouslySetInnerHTML={{__html: innerComment}}></div>
            )}
        </>
    )
};

export default SecondComment;
