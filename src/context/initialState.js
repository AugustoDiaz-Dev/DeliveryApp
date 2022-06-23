import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const initialState = {
    user: userInfo,
}

export default initialState; // Check out this bug
