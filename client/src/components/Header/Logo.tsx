import { Link } from "react-router-dom";

type Props = {
  classes?: string;
  to: string;
} & typeof defaultProps;

const defaultProps = {
  classes: "",
};

const Logo = ({ classes, to }: Props) => {
  return (
    <Link className={classes} to={to}>
      Prokopenko
    </Link>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
