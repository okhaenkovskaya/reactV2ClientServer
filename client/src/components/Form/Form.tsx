import style from "./Form.module.scss";

interface Props {
  children: React.ReactNode;
  submitFunction: (submitFunction: any) => void;
}

const Form = ({ children, submitFunction }: Props) => (
  <form className={style.form} onSubmit={submitFunction}>
    {children}
  </form>
);

export default Form;
