import { ActionTypes, Actions, DispatchTypes } from "./Actions";
import { Middleware, Dispatch, MiddlewareAPI } from "redux";
import { runFiltersValidation } from "./ActionCreators";
import { State } from "./State";

const typesRequiringValidation = [
    ActionTypes.ResetFilters,
    ActionTypes.SetSearchText
];

const actionTypeContains = (types: ActionTypes[], type: ActionTypes): boolean =>
  types.indexOf(type) !== -1;

const ValidationMiddleware: Middleware = (
  api: MiddlewareAPI<DispatchTypes, State>
) => (next: Dispatch<Actions>) => <A extends Actions>(action: A) => {
  const result = next(action);

  if (actionTypeContains(typesRequiringValidation, action.type)) {
    api.dispatch(runFiltersValidation());
  }

  return result;
};

export default ValidationMiddleware;
