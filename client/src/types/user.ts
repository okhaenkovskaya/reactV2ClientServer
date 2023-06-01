declare namespace userContent {

    type Props = {
        user: null | PropsUser;
    }

    type PropsUser = {
        iat: number;
        exp: number;
        id: string;
        email: string;
    };
}