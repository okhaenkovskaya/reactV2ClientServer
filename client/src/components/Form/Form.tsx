import style from "./Form.module.scss";

interface Props {
  children: React.ReactNode | JSX.Element;
  submitFunction: (submitFunction: any) => void;
  classes?: string | null;
}

const Form = ({ children, submitFunction, classes }: Props) => (
  <form className={classes || style.form} onSubmit={submitFunction}>
    {children}
  </form>
);

export default Form;
