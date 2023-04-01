import { useState, useEffect } from "react";

function FilmsPage(props) {
  let [list, setList] = useState([]);

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((films) => {
        console.log(films);
        setList(films);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
