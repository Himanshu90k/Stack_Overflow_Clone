interface AuthState {
    data: any | null;
}

const initialState: AuthState = {
    data: null,
};

type AuthAction =
    | { type: "AUTH"; data: any }
    | { type: "LOGOUT" };


const authreducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem("Profile", JSON.stringify({...action?.data}));
            return {...state, data: action?.data};
        case "LOGOUT":
            localStorage.clear();
            return {...state, data: null};
        default:
            return state;
    }
};

export default authreducer;