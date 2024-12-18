import { combineReducers } from "redux";
import authreducer from "./auth";
import currentuserreducer from "./currentuser";
import usersreducer from "./users";
import questionreducer from "./question";

const rootReducer = combineReducers({
    authreducer,
    currentuserreducer,
    usersreducer,
    questionreducer,
});

export default rootReducer;