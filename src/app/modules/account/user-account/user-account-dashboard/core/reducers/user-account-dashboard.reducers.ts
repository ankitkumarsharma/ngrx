import { Action, createReducer } from "@ngrx/store"; 
import { UserAccountDashboardTypes } from "../config/user-account-dashboard.types";

export const userAccountDashboardKey = "userAccountDashboard";
export const initialState: UserAccountDashboardTypes = {
    userName: null,
    userProfile: ''
}
const userAccountDashboardReducer = createReducer(
    initialState,
    // code
);
export function reducer(state:UserAccountDashboardTypes | undefined, action:Action){
    return userAccountDashboardReducer(state, action);
}