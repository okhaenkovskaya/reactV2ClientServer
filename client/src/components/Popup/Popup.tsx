import style from "./Popup.module.scss";
import Button from "../Button";
import { Form, FormButton, Input } from "../Form";
import { useRef, useState } from "react";

interface popupProps {
  isShowPopup: boolean;
  setIsShowPopup: (isShowPopup: boolean) => void;
}

type PropsData = {
  phone: string;
  email: string;
};

const Popup = ({ isShowPopup, setIsShowPopup }: popupProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [data, setData] = useState<PropsData>({
    phone: "",
    email: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(data, "data");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={style.popup}>
      <h1>Popup Form</h1>
      <Form submitFunction={handleSubmit}>
        <Input
          isRequired
          type="tel"
          name="phone"
          pattern="[0-9]{7}"
          value={data.phone}
          changeFunction={handleChange}
          placeholder="Phone"
        />
        <Input
          isRequired
          type="email"
          name="email"
          value={data.email}
          changeFunction={handleChange}
          placeholder="Email"
        />
        <FormButton innerRef={buttonRef}>Send</FormButton>
      </Form>

      <Button
        classes={style.popupBtn}
        onClick={() => setIsShowPopup(!isShowPopup)}
      >
        X
      </Button>
    </div>
  );
};

export default Popup;
