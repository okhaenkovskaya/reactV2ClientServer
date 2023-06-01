import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import {FormButton, Input} from "../../components/Form";
import {AuthContent} from "../../context/auth";
import style from "./Register.module.scss"

interface IUserData {
    email: string;
    password: string;
    confirmPassword: string,
    firstName: string,
    lastName: string,
}

const Register = () => {
    const navigate = useNavigate();
    const context = useContext(AuthContent);
    const [isError, setIsError] = useState<null | string >(null);
    const [userData, setUserData] = useState<IUserData>({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        try {
            const result = await (
                await fetch("http://localhost:5010/user/registration", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        password: userData.password,
                        confirmPassword: userData.confirmPassword,
                    })
                })
            ).json();

            if(result) {
                context.login(result);
                "result" in result ? navigate("/account/profile") : setIsError(result.message);
            }
        } catch (error) {
            console.log(error);
        }


    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setIsError(null);
    };

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                {isError && <mark className={style.error}>{isError}</mark>}

                <Input
                    placeholder="First Name"
                    name="firstName"
                    isRequired
                    value={userData.firstName}
                    changeFunction={handleChange}
                />

                <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={userData.lastName}
                    changeFunction={handleChange}
                />


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

                <Input
                    type="password"
                    placeholder="Password confirm"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    changeFunction={(e:any) => handleChange(e)}
                />


                <FormButton>Register</FormButton>
            </form>
        </div>
    );
};

export default Register;
