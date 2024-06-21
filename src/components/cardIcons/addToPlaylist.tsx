import React, {MouseEvent, useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {BaseMovieProps} from "../../types/interfaces"

const AddToFavouritesIcon: React.FC<BaseMovieProps> = (movie) => {

  return (
    <IconButton aria-label="add to favorites">
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;