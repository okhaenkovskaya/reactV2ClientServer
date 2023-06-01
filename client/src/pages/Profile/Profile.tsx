import {useContext} from "react";
import {AuthContent} from "../../context/auth.tsx";


type Props = {
    user: null | PropsUser;
}

type PropsUser = {
    iat: number;
    exp: number;
    id: string;
    email: string;
};

const Profile = () => {
    const { user }: Props = useContext(AuthContent);

    if (!user) {
        return <>Please Login...</>;
    }

    return (
        <div>
            <span>{user.email}</span>
        </div>
    );
};

export default Profile;
