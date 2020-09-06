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

export const updateSearchText = (value: string) => async (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  dispatch({ type: ActionTypes.SetSearchText, value: value });

  await handleSearch(dispatch, getState);
};

export const updateRating = (value: Rating) => async (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  dispatch({ type: ActionTypes.SetRating, value: value });

  await handleSearch(dispatch, getState);
};

const handleSearch = debounce(
  async (dispatch: DispatchTypes, getState: () => State) => {
    const { isValid } = getState();
    const { searchText, rating } = getState().filters;

    if (isValid) {
      dispatch({ type: ActionTypes.SetLoading, value: true });

      const result = await gf.search(searchText, {
        rating: rating,
        limit: 25,
        sort: 'relevant'
      });

      dispatch({ type: ActionTypes.SetResults, value: result.data });
      dispatch({ type: ActionTypes.SetLoading, value: false });
    }
  },
  750
);
