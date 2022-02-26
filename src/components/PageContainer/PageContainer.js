import React from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import "./PageContainer.css";

const PageContainer = ({
  title,
  content,
  handleClick,
  handleDelete,
  page,
  setPage,
  mediaTypes,
  numOfPages,
  radioValue,
}) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  console.log(content);
  return (
    <div className="pageContainer">
      <div className="pageTitle">
        <h2>{title}</h2>
      </div>
      {mediaTypes && (
        <div className="genrePageContainer">
          <Chip
            label="Movies"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
            color="primary"
            deleteIcon={mediaTypes === "movie" ? <DoneIcon /> : <CloseIcon />}
          />
          <Chip
            label="TV Series"
            onClick={handleClick}
            variant="outlined"
            color="primary"
            onDelete={handleDelete}
            deleteIcon={mediaTypes === "tv" ? <DoneIcon /> : <CloseIcon />}
          />
        </div>
      )}
      <div className="trending">
        {content &&
          content.map((x) => (
            <SingleContent
              key={x.id}
              id={x.id}
              poster={x.poster_path}
              title={x.title || x.name}
              date={x.first_air_date || x.release_date}
              media_type={x.media_type}
              vote_average={x.vote_average}
              radioValue={radioValue}
            />
          ))}
      </div>
      <div className="pagination">
        <Pagination
          className="pagination"
          count={numOfPages}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PageContainer;
