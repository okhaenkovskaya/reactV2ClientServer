import {useContext, useState} from "react";

import {BASE_URL_USER} from "../../data/constans.ts"
import {AuthContent} from "../../context/auth.tsx";
import {FormButton} from "../../components/Form";
import ProfileForm from "../../components/ProfileForm";

type PropsUser = {
    email: string;
    id: string;
};

const Profile = () => {
    const { user, logout }: userContent.Props = useContext(AuthContent);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const [updatedUser, setUpdatedUser] = useState<PropsUser>({
        email: user.email,
        id: user.id,
    });

    const deleteUser = async (id: string | number) => {
        try {
            const result = await (
                await fetch(`${BASE_URL_USER}/${id}`, {
                    method: "DELETE",
                })
            ).json();

            if(result) {
                logout();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <span>{user.email}</span>

            <FormButton
                type="button"
                clickFunction={() => deleteUser(updatedUser.id)}
            >
                DELETE MY PROFILE
            </FormButton>

            <FormButton
                type="button"
                clickFunction={() => setIsOpenForm(!isOpenForm)}
            >
                {isOpenForm ? "Close" : "Edit"}
            </FormButton>

            {isOpenForm ? (
                <ProfileForm
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                    setIsOpenForm={setIsOpenForm}
                />
            ) : null}
        </div>
    );
};


export default Profile;
