import style from "./Form.module.scss";

type Props = {
  name?: string | undefined;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
  changeFunction?: any;
} & typeof defaultProps;

const defaultProps = {
  name: "",
  placeholder: "",
  value: "",
  isRequired: false,
  changeFunction: null,
};

const Textarea = ({
  name,
  placeholder,
  value,
  isRequired,
  changeFunction,
}: Props) => (
  <>
    <textarea
      className={style.textarea}
      required={isRequired}
      placeholder={placeholder}
      onChange={changeFunction}
      name={name}
      defaultValue={value}
    ></textarea>
  </>
);

Textarea.defaultProps = defaultProps;

export default Textarea;
