declare namespace userContent {

    type Props = {
        user: null | PropsUser;
        logout?: any;
    }

    type PropsUser = {
        iat: number;
        exp: number;
        id: string;
        email: string;
    };

    type userRegister = {
        email: string;
        password: string;
        confirmPassword: string,
        firstName: string,
        lastName: string,
    }
}