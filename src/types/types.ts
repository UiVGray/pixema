import React from 'react';

export interface IMovieProps {
  id: number;
  name: string;
  rating: { [key: string]: number };
  genres: { [key: string]: string }[];
  poster: { [key: string]: string };
  fees: {
    [key: string]: {
      value: number;
      currency: string;
    }
  };
  budget: { [key: string]: number | string };
  movieLength: number;
  year: number;
  description: string;
  productionCompanies: { [key: string]: string }[];
  countries: { [key: string]: string }[];
  persons: { [key: string]: string | number }[];
  type: string;
};

export interface IMovieCardProps {
  id?: number;
  name: string;
  rating: { [key: string]: number };
  genres: { [key: string]: string }[];
  poster: { [key: string]: string };
};

export interface IFetchMoviesProps {
  docs: IMovieProps[];
  pages: number;
  currentPage: number;
}

export interface IFormFieldProps {
  type: string;
  className?: string;
  name: string;
  label?: string;
  value: string;
  id?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface IUserProps {
  firstName: string;
  lastName: string;
};

export interface IStateProps {
  list: IMovieProps[];
  listPopular: IMovieProps[];
  data?: IMovieProps;
  searchResult: IMovieProps[];
  isLoaded: boolean;
  error: string | undefined;
  limit: number;
  pageCount: number;
  ordering?: string;
};

export interface IDarkModeProviderProps {
  children: React.JSX.Element;
}