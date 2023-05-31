import style from "./Form.module.scss";

type Props = {
  children: React.ReactNode | string;
  innerRef?: any | null;
  isDisabled?: boolean;
  clickFunction?: () => void | undefined;
  type?: any;
} & typeof defaultProps;

const defaultProps = {
  type: "submit",
  classes: "",
  isDisabled: false,
  innerRef: null,
  clickFunction: undefined,
};

const FormButton = ({
  children,
  innerRef,
  isDisabled,
  clickFunction,
  type,
}: Props) => (
  <button
    className={style.button}
    type={type}
    ref={innerRef}
    disabled={isDisabled}
    onClick={clickFunction}
  >
    {children}
  </button>
);

FormButton.defaultProps = defaultProps;

export default FormButton;
