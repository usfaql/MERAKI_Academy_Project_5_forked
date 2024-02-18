import React from "react";
import "./style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Private_user = () => {
  const [selected, setSelected] = useState("private");

  const [searchInput, setSearchInput] = useState("");

  const myArray = ["Apple", "banana",'tomato' ,'banana'];

  const SearchBar = ({ data }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };

    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <div className="ser">
          <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
          className="search_bar"
        />  
        </div>
        
        <div>
          <br />
          <div className="coachs">

            {filteredData.map((item) => (
              <div className="coach_bar">
                <a className="coach_info">
                    {item}</a>
                
                <a className="coach_btn">
                  <Button size="lg">
                    JOIN
                      </Button>
                  
                
                </a>

             
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="private_user">
      <div>
        <ul className="contener-navbar-home">
          <li
            className={
              selected === "gym" ? "nav-home gyms-selected" : "nav-home gyms"
            }
            onClick={() => {
              setSelected("gym");
            }}
          >
            Gyms
          </li>
          <li
            className={
              selected === "private"
                ? "nav-home private-selected"
                : "nav-home private"
            }
            onClick={() => {
              setSelected("private");
            }}
          >
            Private
          </li>
          <li
            className={
              selected === "allgym"
                ? "nav-home all-gyms-selected"
                : "nav-home all-gyms"
            }
            onClick={() => {
              setSelected("allgym");
            }}
          >
            All Gyms
          </li>
        </ul>
      </div>
      <div className="search_bar">
        <SearchBar data={myArray} />
      </div>
    </div>
  );
};

export default Private_user;
