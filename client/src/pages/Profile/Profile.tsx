import {useContext} from "react";
import {AuthContent} from "../../context/auth.tsx";


const Profile = () => {
    const { user }: userContent.Props = useContext(AuthContent);

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
