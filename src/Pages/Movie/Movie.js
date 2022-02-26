import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { img_500, unavailableLandscape } from "../../config/config";
import "./Movie.css";
import Chip from "@mui/material/Chip";

const Movie = ({ radioValue }) => {
  !radioValue && (radioValue = "movie");
  console.log(radioValue);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [releaseDate, setReleaseDate] = useState();

  const fetchMovieById = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${radioValue}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setReleaseDate(data.release_date || data.first_air_date);
  }, [data]);

  return (
    <div className="movieContainer">
      <div className="mainImg">
        <img src={`${img_500}/${data.poster_path}`} alt="poster" />
      </div>
      <div className="mainBody">
        <div className="titleSingle">
          {`${data.title || data.name}`}
          <span>{`(${releaseDate && releaseDate.slice(0, 4)})`}</span>
        </div>
        <p>{`${data.tagline}`}</p>
        <p className="genres">
          {data.genres &&
            data.genres.map((item) => (
              <Chip
                key={item.id}
                label={item.name}
                color="secondary"
                className="genre"
              />
            ))}
        </p>
        {data.runtime && (
          <p>
            {" "}
            {`Movie Length : ${Math.floor(data.runtime / 60)}`} Hr{" "}
            {`${Math.floor(data.runtime % 60)}`} Minutes
          </p>
        )}
        {data.release_date && <p>{`${data.status} :${data.release_date}`}</p>}
        {data.homepage && (
          <a className="homePage" href={`${data.homepage}`}>
            <Chip label="Visit Home Page" color="secondary" />
          </a>
        )}
        {data.budget && <p>{`Budget :${data.budget}`}</p>}
        {data.revenue && <p>{`Revenue :${data.revenue}`}</p>}
        <p className="overview">{`${data.overview}`}</p>

        <div
          className="productionCompanies"
          style={{
            gridTemplateColumns: `repeat(${
              data.production_companies ? data.production_companies.length : 1
            }, minmax(100px, 200px))`,
            margin: "40px",
          }}
        >
          {data.production_companies &&
            data.production_companies.map((item) => (
              <div className="productionCompany" key={item.id}>
                <img
                  src={
                    item.logo_path
                      ? `${img_500}/${item.logo_path}`
                      : `${unavailableLandscape}`
                  }
                  alt={item.name}
                />
                <span style={{ textAlign: "center" }}>{item.name}</span>
              </div>
            ))}
        </div>
        {data.vote_count && (
          <p>{`${data.vote_count} Voters Voted Average: ${data.vote_average}`}</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
