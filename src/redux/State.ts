import { Filters } from "../models/Filters";
import { Validation } from "../models/Validation";
import { IGif } from '@giphy/js-types';

export interface State {
    filters: Filters,
    results: IGif[],
    hasMore: boolean,
    validation: Validation,
    isValid: boolean,
    isLoading: boolean
}

export const defaultFilters: Filters = {
    searchText: undefined,
    rating: 'pg-13'
}

export const defaultValidation: Validation = {
    isTextValid: true
}

export const defaultState: State = {
    filters: defaultFilters,
    results: [],
    hasMore: false,
    validation: defaultValidation,
    isValid: false,
    isLoading: false
}