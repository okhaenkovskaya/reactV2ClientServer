import {useReducer, createContext} from "react";
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
}

if(localStorage.getItem("jwtDecode")) {
    const decodeToken = jwtDecode(localStorage.getItem("jwtDecode"));

    if(decodeToken.exp *1000 < Date.now()) {
        localStorage.removeItem("jwtDecode")
    } else {
        initialState.user = decodeToken;
    }
}

const AuthContent = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {},
})

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function login(userData: any) {
        localStorage.setItem("jwtDecode", userData.token);
        dispatch({
            type: "LOGIN",
            payload: userData.result
        })
    }

    function logout() {
        localStorage.removeItem("jwtDecode");
        dispatch({type: "LOGOUT"})
    }

    return(
        <AuthContent.Provider value={{user: state.user, login, logout}} {...props} />
    )
}

export { AuthContent, AuthProvider };