import React from "react";

interface Movie {
  _id: string;
  title: string;
  poster: string;
  plot: string;
}

interface MovieCardProps {
  key: number;
  item: Movie;
}

export const MovieCard = ({ item, key }: MovieCardProps) => {
  return (
    
    <div className="w-48 h-60" key={key}>
      <img src={item.poster} alt={item.title} className="w-48 h-48"/>
      <h1>{item.title}</h1>
    </div>
  );
};
