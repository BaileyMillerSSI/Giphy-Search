export interface Filters {
    searchText?: string,
    rating?: Rating
}

export type Rating = 'pg' | 'g' | 'y' | 'pg-13' | 'r'