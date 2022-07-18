import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const initialState = {
    user: userInfo,
    foodItems: null
}

export default initialState; // Check out this bug
