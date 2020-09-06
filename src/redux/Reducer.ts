import { Actions, ActionTypes } from "./Actions";
import { State, defaultFilters, defaultState } from "./State";

export const Reducer = (
  state: State = defaultState,
  action: Actions
): State => {
  switch (action.type) {
    case ActionTypes.SetResults:
      return {
        ...state,
        results: action.value
      }
    case ActionTypes.SetSearchText:
      return {
        ...state,
        filters:{
          ...state.filters,
          searchText: action.value
        }
      }
    case ActionTypes.SetRating:
      return {
        ...state,
        filters:{
          ...state.filters,
          rating: action.value
        }
      }
    case ActionTypes.ResetFilters:
      return {
        ...state,
        filters: {
          ...defaultFilters,
        },
        results: []
      };
    case ActionTypes.SetLoading:
      return {
        ...state,
        isLoading: action.value,
      };
    case ActionTypes.SetValid:
      return {
        ...state,
        validation: {
          ...state.validation,
          ...action.value,
        },
        isValid: action.value.isTextValid,
      };
    default:
      return state;
  }
};
