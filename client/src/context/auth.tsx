import {useReducer, createContext} from "react";
import jwtDecode from "jwt-decode";

const initialState = {
    user: {
        "iat": 0,
        "exp": 0,
        "id": "0",
        "email": "",
    },
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
    user: {
        "iat": 0,
        "exp": 0,
        "id": "0",
        "email": "",
    },
    login: (userData) => {},
    logout: () => {},
    update: (userData) => {},
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
        case "UPDATE":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function update(userData: any) {
        localStorage.setItem("jwtDecode", userData.token);
        dispatch({
            type: "UPDATE",
            payload: userData.result,
        });
    }

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
        <AuthContent.Provider value={{user: state.user, login, logout, update}} {...props} />
    )
}

export { AuthContent, AuthProvider };