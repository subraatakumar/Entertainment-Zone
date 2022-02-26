import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";

const Trending = () => {
  const [mediaTypes, setMediaTypes] = useState("all");
  const [page, setPage] = useState(1);

  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaTypes}/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data);
    setContent(data.results);
  };

  const handleClick = (event) => {
    if (event.target.innerText === "Movies") {
      mediaTypes === "movie" ? setMediaTypes("all") : setMediaTypes("movie");
    }
    if (event.target.innerText === "TV Series") {
      mediaTypes === "tv" ? setMediaTypes("all") : setMediaTypes("tv");
    }

    console.info("You clicked the Chip.");
    console.log(event.target.innerText);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, mediaTypes]);

  return (
    <PageContainer
      title="Trending Today"
      content={content}
      handleClick={handleClick}
      handleDelete={handleDelete}
      page={page}
      setPage={setPage}
      mediaTypes={mediaTypes}
      numOfPages={10}
    />
  );
};

export default Trending;
