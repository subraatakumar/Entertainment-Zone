import React, { useEffect } from "react";
import "./Search.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import axios from "axios";
import PageContainer from "../../components/PageContainer/PageContainer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Search = () => {
  const [searchIconColor, setSearchIconColor] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [content, setContent] = React.useState([]);
  const [numOfPages, setNumOfPages] = React.useState(10);
  const [searchText, setSearchText] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("movie");
  const [btnDisableStatus, setBtnDisableStatus] = React.useState(true);

  const handleChangeRadioValue = (event) => {
    setRadioValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    if (searchText.length > 0) {
      setSearchIconColor("primary");
      setBtnDisableStatus(false);
    } else {
      setSearchIconColor("");
      setBtnDisableStatus(true);
    }
  };
  const fetchSearch = async () => {
    console.log(searchText);
    if (searchText.trim().length > 0) {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${radioValue}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        //setSearchText('');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, radioValue]);
  return (
    <>
      <Paper className="searchTextFieldContainer">
        <div className="searchTextFieldContainerUpper">
          <TextField
            className="searchTextField"
            id="outlined-name"
            label="Enter Here and click the Search button"
            value={searchText}
            onChange={handleSearchChange}
          />
          <IconButton
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={fetchSearch}
            disabled={btnDisableStatus}
          >
            <SearchIcon className="searchIcon" color={searchIconColor} />
          </IconButton>
        </div>
        <div className="searchTextFieldContainerLower">
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radioValue}
            onChange={handleChangeRadioValue}
          >
            <FormControlLabel value="tv" control={<Radio />} label="TV Shows" />
            <FormControlLabel
              value="movie"
              control={<Radio />}
              label="Movies"
            />
          </RadioGroup>
        </div>
      </Paper>
      {content.length !== 0 && (
        <PageContainer
          title=""
          content={content}
          handleClick={() => {}}
          handleDelete={() => {}}
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
          mediaTypes={null}
          radioValue={radioValue}
        />
      )}
    </>
  );
};

export default Search;
