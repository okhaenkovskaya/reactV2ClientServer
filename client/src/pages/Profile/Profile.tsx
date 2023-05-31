import {useContext, useEffect} from "react";
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
    const context = useContext(AuthContent);
    console.log(context, '1111')


    if (!context.user) {
        return <>Please Login...</>;
    }

    return (
        <div>
            <span>{context.user.email}</span>
        </div>
    );
};

export default Profile;
