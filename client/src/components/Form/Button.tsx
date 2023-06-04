import style from "./Form.module.scss";

type Props = {
  children: string | JSX.Element;
  innerRef?: any | null;
  isDisabled?: boolean;
  clickFunction?: () => void | undefined;
  type?: string;
} & typeof defaultProps;

const defaultProps = {
  type: "submit",
  isDisabled: false,
  innerRef: null,
  clickFunction: null,
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
