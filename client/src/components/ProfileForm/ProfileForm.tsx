import { useContext } from "react";

import { FormButton, Input, Form } from "../Form";
import { BASE_URL_USER } from "../../data/constans.ts";
import { AuthContent } from "../../context/auth.tsx";

type Props = {
    setUpdatedUser: (param: object) => void;
    setIsOpenForm: (param: boolean) => void;
    updatedUser: PropsUser
};

type PropsUser = {
    email: string;
    id: string;
};

const ProfileForm = ({ setUpdatedUser, updatedUser, setIsOpenForm }: Props) => {
    const { user, update } = useContext(AuthContent);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const result = await (
                await fetch(`${BASE_URL_USER}/${updatedUser.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedUser),
                })
            ).json();

            if(result) {
                update(result);
                setIsOpenForm(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form submitFunction={handleSubmit}>
            <h1>Please Update your info</h1>
            <Input
                name="email"
                type="email"
                value={updatedUser.email}
                changeFunction={(e: any) => handleChange(e)}
            />
            <FormButton type="submit">Update my Info</FormButton>
        </Form>
    );
};

export default ProfileForm;
