interface CurrentUserAction {
    type: "FETCH_CURRENT_USER";
    payload: any;
};

const currentuserreducer = (state = null, action: CurrentUserAction) => {
    switch (action.type) {
        case "FETCH_CURRENT_USER":
            return action.payload;
        default:
            return state;
    };
};

export default currentuserreducer;