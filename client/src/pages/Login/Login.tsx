import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import {AuthContent} from "../../context/auth";
import {FormButton, Input} from "../../components/Form";
import style from "./Login.module.scss"

interface IUserData {
    email: string;
    password: string;
}
const Login = () => {
    const navigate = useNavigate();
    const context = useContext(AuthContent);
    const [isError, setIsError] = useState<null | string >(null);
    const [userData, setUserData] = useState<IUserData>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const result = await (
                await fetch("http://localhost:5010/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: userData.email ,
                        password: userData.password,
                    })
                })
            ).json();

            if(result) {
                if ("result" in result) {
                    context.login(result)
                    navigate("/dashboard")
                } else {
                    setIsError(result.message)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setIsError(null);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {isError && <mark className={style.error}>{isError}</mark>}
            <Input type="email"
                   placeholder="Email"
                   name="email"
                   value={userData.email}
                   changeFunction={(e:any) => handleChange(e)}
            />

            <Input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                changeFunction={(e:any) => handleChange(e)}
            />
            <FormButton>LOGIN</FormButton>
        </form>
    );
};

export default Login;
