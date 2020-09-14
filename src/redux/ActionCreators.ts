import { DispatchTypes, ActionTypes } from "./Actions";
import { State } from "./State";
import { Validation } from "../models/Validation";
import { debounce } from "lodash";
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Rating } from "../models/Filters";

const gf = new GiphyFetch('0e0oqjOCdmqCSvp5EDEVJqmE9vQwGjuI');

const baseHeaders = new Headers();
baseHeaders.append("Content-Type", "application/json");

export const runFiltersValidation = () => (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  const { searchText } = getState()?.filters;

  const validation: Validation = {
    isTextValid: searchText ? true : false
  };

  dispatch({ type: ActionTypes.SetValid, value: validation });
};

export const loadMore = () => async (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  
  await handleSearch(dispatch, getState, false);
};

export const updateSearchText = (value: string) => async (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  dispatch({ type: ActionTypes.SetSearchText, value: value });

  await handleSearch(dispatch, getState, true);
};

export const updateRating = (value: Rating) => async (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  dispatch({ type: ActionTypes.SetRating, value: value });

  await handleSearch(dispatch, getState, false);
};

const handleSearch = debounce(
  async (dispatch: DispatchTypes, getState: () => State, clearResults: boolean) => {
    const { isValid, results } = getState();
    const { searchText, rating } = getState().filters;

    if (isValid) {
      dispatch({ type: ActionTypes.SetLoading, value: true });

      const result = await gf.search(searchText, {
        rating: rating,
        limit: 25,
        sort: 'relevant',
        offset: results.length
      });

      dispatch({type: ActionTypes.SetHasMore, value: result.pagination.total_count !== results.length});
      if(clearResults){
        dispatch({ type: ActionTypes.SetNewResults, value: result.data });
      }else{
        dispatch({ type: ActionTypes.SetResults, value: result.data });
      }
      dispatch({ type: ActionTypes.SetLoading, value: false });
    }
  },
  750
);
