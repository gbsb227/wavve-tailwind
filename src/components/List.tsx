import React, { useEffect, useState } from "react";
import ListBand from "./ListBand";

function List() {
  const [tv, setTv] = useState([]);
  const [movie, setMovie] = useState([]);
  const [trend, setTrend] = useState([]);
  const optionsTv = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlkYTE2NTYxMjUwMzdhMGFjMGIzYTQyZjBmZDU5MSIsInN1YiI6IjY1NGM4NDMyMjkzODM1MDBjNDcyZDg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YW7QV--GADYjZwcVjzmb4ESV64JEJyIDUmG05jtQPXg",
    },
  };

  const optionsMoive = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlkYTE2NTYxMjUwMzdhMGFjMGIzYTQyZjBmZDU5MSIsInN1YiI6IjY1NGM4NDMyMjkzODM1MDBjNDcyZDg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YW7QV--GADYjZwcVjzmb4ESV64JEJyIDUmG05jtQPXg",
    },
  };
  const optionsTrending = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlkYTE2NTYxMjUwMzdhMGFjMGIzYTQyZjBmZDU5MSIsInN1YiI6IjY1NGM4NDMyMjkzODM1MDBjNDcyZDg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YW7QV--GADYjZwcVjzmb4ESV64JEJyIDUmG05jtQPXg",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      optionsTv
    )
      .then((response) => response.json())
      .then((response) => setTv(response.results))
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      optionsMoive
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      optionsTrending
    )
      .then((response) => response.json())
      .then((response) => setTrend(response.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(tv);
  return (
    <section className="h-full">
      <ListBand genre={"TV 온에어 중!"} datas={tv} />
      <ListBand genre={"절찬 상영중!"} datas={movie} />
      <ListBand genre={"트렌드!"} datas={trend} />
    </section>
  );
}

export default List;
