import { useEffect, useState } from "react";
import "./styles/App.css";
import axios from "axios";
import logoRM from "./assets/img/rickandmortylogo.png";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentInfo from "./components/ResidentInfo";
import FilterList from "./components/FilterList";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [suggedtedList, setSuggestedList] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let id = getRandomNumber();
    if (searchInput) {
      id = searchInput;
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`;

    axios
      .get(URL)
      .then((res) => {
        setHasError(false);
        setLocation(res.data);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, [searchInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.idLocation.value);
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      setSuggestedList();
    } else {
      const URL = `https://rickandmortyapi.com/api/location/?name=${event.target.value}`;
      axios
        .get(URL)
        .then((res) => setSuggestedList(res.data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className="App">
      <header className="header">
        <div className="header__content">
          <img
            className="header__logo"
            src={logoRM}
            alt="Rick And Morty Logo"
          />
          <form className="header__seeker" onSubmit={handleSubmit}>
            <input
              className="header__search"
              id="idLocation"
              type="text"
              placeholder="Enter a number from 1 - 126"
              onChange={handleChange}
            />
            <button className="btn header__btn">Search</button>
            {
              <div className="header__sugested">
                <FilterList
                  suggedtedList={suggedtedList}
                  setSearchInput={setSearchInput}
                />
              </div>
            }
          </form>
        </div>
      </header>

      {hasError ? (
        <ErrorScreen />
      ) : (
        <>
          <div className="container">
            <section className="location__banner">
              <LocationInfo location={location} />
            </section>
            <section className="resident">
              {location?.residents.map((url) => (
                <ResidentInfo key={url} url={url} />
              ))}
            </section>
          </div>
        </>
      )}

      <footer className="footer">
        <p>
          Designed & Coded By:{" "}
          <a href="#">
            <span>FjTechRD</span>
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
