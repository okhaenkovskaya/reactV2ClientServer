import style from "./Form.module.scss";

type Props = {
  buttonText: string;
  isDisabled?: boolean;
  type: "submit" | "button" | "reset";

} & typeof defaultProps;

const defaultProps = {
  type: "submit",
  isDisabled: false,
  buttonText: "Button text",
};

const FormButton = ({
  buttonText,
  isDisabled,
  type,
}: Props) => (
  <button
    className={style.button}
    type={type}
    disabled={isDisabled}
  >
    {buttonText}
  </button>
);

FormButton.defaultProps = defaultProps;

export default FormButton;
