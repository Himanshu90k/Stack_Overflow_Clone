import { combineReducers } from "redux";
import authreducer from "./auth";
import currentuserreducer from "./currentuser";
import usersreducer from "./users";

export default combineReducers({
    authreducer,
    currentuserreducer,
    usersreducer,
});