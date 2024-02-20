import { IProfile } from "../interfaces/profile";
import { ActionTypes } from "../types/actionTypes";

interface SettingsState {
  data: IProfile | null;
}

const initialState: SettingsState = {
  data: null,
};

type SettingsAction =
  | { type: ActionTypes.LOAD_PROFILE; payload: IProfile }
  | {
      type: ActionTypes.UPDATE_PROFILE_FIELD;
      payload: { field: keyof IProfile; value: any };
    };

const settingsReducer = (
  state = initialState,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case ActionTypes.LOAD_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.UPDATE_PROFILE_FIELD:
      return {
        ...state,
        data: state.data
          ? {
              ...state.data,
              [action.payload.field]: action.payload.value,
            }
          : null,
      };
    default:
      return state;
  }
};

export default settingsReducer;
