import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const SingleContent = ({
  id,
  title,
  poster,
  media_type,
  date,
  vote_average,
  radioValue,
}) => {
  console.log("media Type" + media_type);
  return (
    <NavLink
      to={
        media_type
          ? `/${media_type === "tv" ? "tv" : "movie"}/${id}`
          : `/${radioValue}/${id}`
      }
      className="mediaContainer"
    >
      <Box
        className="media"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <div className="poster">
          <Badge
            badgeContent={vote_average}
            color={vote_average > 6 ? "success" : "secondary"}
          ></Badge>
          <img
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="subTitle">
          <span>
            {media_type
              ? media_type === "tv"
                ? "TV Series"
                : "Movie"
              : radioValue === "tv"
              ? "TV Series"
              : "Movie"}
          </span>
          <span>{date}</span>
        </div>
      </Box>
    </NavLink>
  );
};

export default SingleContent;
