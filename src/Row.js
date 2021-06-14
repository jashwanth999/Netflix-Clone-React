import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./styles.css";

import { useHistory } from "react-router-dom";

export default function Row({ title, fetchUrl }) {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, [fetchUrl]);

  return (
    <div>
      <h2
        style={{
          color: "white",
          fontSize: 20,
          marginLeft: 18,
          marginTop: 15,
          fontWeight: "bold"
        }}
      >
        {title}
      </h2>
      <div
        className="row"
        style={{ width: "100%", overflowX: "scroll", objectFit: "contain" }}
      >
        <Rows>
          {movies.map((d) => (
            <Column
              onClick={() => {
                history.push(
                  `/MovieDetails/${d.id}${d.backdrop_path}/${d.title}`
                );
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${d.poster_path}`}
                alt="king"
                width="120"
                height="150"
                style={{
                  objectFit: "contain"
                }}
              />
            </Column>
          ))}
        </Rows>
      </div>
    </div>
  );
}

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  border: 6px solid black;
`;
const Column = styled.div`
  display: flex;
  
  margin-left: 5px;
  transition: transform 350ms;
  border-radius: 20px;

  :hover {
    transform: scale(1.08);
  }
`;
