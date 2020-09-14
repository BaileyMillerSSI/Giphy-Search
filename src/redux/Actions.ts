import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";
import { Validation } from "../models/Validation";
import { Rating } from "../models/Filters";
import { IGif } from '@giphy/js-types';

export type Actions =
    { type: ActionTypes.ResetFilters }
    | { type: ActionTypes.SetFormLoading, value: boolean }
    | { type: ActionTypes.SetLoading, value: boolean }
    | { type: ActionTypes.SetValid, value: Validation }
    | { type: ActionTypes.SetSearchText, value: string}
    | {type: ActionTypes.SetRating, value: Rating}
    | { type: ActionTypes.SetResults, value: IGif[]}
    | { type: ActionTypes.SetNewResults, value: IGif[]}
    | { type: ActionTypes.SetHasMore, value: boolean}


export enum ActionTypes {
    ResetFilters = 'RESET_FILTERS',
    SetFormLoading = 'SET_FORM_LOADING',
    SetLoading = 'SET_LOADING',
    SetValid = 'SET_VALID',
    SetSearchText = 'SET_SEARCH_TEXT',
    SetRating = 'SET_RATING',
    SetResults = 'SET_RESULTS',
    SetNewResults = 'SET_NEW_RESULTS',
    SetHasMore = 'SET_HAS_MORE'
}

export type DispatchTypes = Dispatch<Actions> & ThunkDispatch<{}, {}, Actions>;