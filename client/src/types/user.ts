declare namespace userContent {

    interface Props {
        user: PropsUser;
        logout?: any;
        login?: any;
        update?: any;
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