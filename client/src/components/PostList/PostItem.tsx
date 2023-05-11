import style from "./PostList.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button";

type Props = {
  title: string;
  body: string;
  id: number | string;
};

const PostItem = ({ title, body, id }: Props) => {
  return (
    <div className={style.postItem}>
      <h2 className={style.postTitle}>
        <Link to={id.toString()}>{title}</Link>
      </h2>
      <div className={style.postText}>{body}</div>
      <Button to={id.toString()}>Read more</Button>
    </div>
  );
};

export default PostItem;
