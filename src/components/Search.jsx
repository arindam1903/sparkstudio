import React from "react";
import axios from "axios";
import BasicPagination from "./Pagination";
import "./Search.css";

export default function Search({ query }) {
  let url = `https://images-api.nasa.gov/search?q=${query}`;
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(3);

  const pageChange = (value) => {
    setCurrentPage(value);
    console.log(value);
  };
  axios.get(url).then((res) => {
    setData(res.data.collection.items.slice(0, 30));
  });

  const show = data.slice(currentPage * 3 - 3, currentPage * 3);
  return (
    <div id="search-result">
      <h3>Search result for {query}</h3>
      {show.map((el) => (
        
        <div id="search-item">
          <div id="search-pic">
            {" "}
            <img className="search-img" src={el.links[0].href} alt={el.data[0].title} />
          </div>
          <div id="search-description">
            {" "}
            <div>{el.data[0].title}</div>
            <div>{el.data[0].date_created}</div>
          </div>
        </div>
      ))}

      <BasicPagination count={data.length / 3} pageChange={pageChange} />
    </div>
  );
}
