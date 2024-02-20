import { IProfile } from "../components/interfaces/profile";
import { ActionTypes } from "../types/actionTypes";

export const loadProfile = (profile: IProfile) => ({
  type: ActionTypes.LOAD_PROFILE,
  payload: profile,
});

export const updateProfileField = (field: keyof IProfile, value: string) => ({
  type: ActionTypes.UPDATE_PROFILE_FIELD,
  payload: { field, value },
});
