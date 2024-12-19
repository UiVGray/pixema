import React from 'react';

export interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  lesson_num: number,
  title: string,
  description: string,
  author: number
};

export interface IFormFieldProps {
  type: string
  className?: string
  name: string
  label?: string
  value: string
  id?: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export interface IMovieCardProps {
  title: string;
  rating: number;
  genres: string[];
  imageUrl: string;
  alt?: string;
};

export interface INavigationItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  isActive?: boolean;
};

export interface ISearchBarProps {
  onSearch: (query: string) => void;
};

export interface IProfileProps {
  initials: string;
  name: string;
};
