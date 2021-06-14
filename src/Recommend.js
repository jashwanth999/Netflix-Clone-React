import { useEffect, useState } from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Row from "./Row";
import data from "./axios";
import Recommend from "./Recommend";
import "./styles.css";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing()
    }
  },
  root2: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

export default function MovieDetails() {
  const classes = useStyles();
  const history = useHistory();
  const { id, backdroppath, moviename } = useParams();
  var i = id.toString();

  const [moviedetails, setmoviedeatils] = useState([]);
  const [moviecastdetails, setMoviecastdeatils] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [rec, setRec] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${i}?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US`
      )
      .then((res) => {
        setmoviedeatils(res.data);
      });
  }, [i]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${i}/credits?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US`
      )
      .then((res) => {
        setMoviecastdeatils(res.data.cast);
      });
  }, [i]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${i}/videos?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US`
      )
      .then((res) => {
        setTrailer(res.data.results);
      });
  }, [i]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  var cast = moviecastdetails.slice(0, 10);

  function play() {
    return <link href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`} />;
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${i}/recommendations?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US&page=1`
      )
      .then((res) => {
        setRec(res.data.results);
      });
  }, [i]);

  return (
    <div
      className="moviedetails"
      style={{ backgroundColor: "black", maxWidth: "100%" }}
    >
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          opacity: 0.6,
          backgroundImage: `Url('https://image.tmdb.org/t/p/original/${backdroppath}')`,
          backgroundPosition: "center center"
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{moviename}</h1>
          <div
            className="banner_buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "spaceBetween",
              marginLeft: "0px"
            }}
          >
            <div className={classes.root}>
              <Button
                style={{
                  width: "auto",
                  fontWeight: "bold",
                  marginRight: "0px"
                }}
                variant="contained"
                href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
                onClick={play}
              >
                Play Trailer
              </Button>
            </div>
          </div>
          <div className="banner--fadebottom" />
        </div>
      </header>

      <Rows>
        <Column style={{ color: "white", fontSize: 12, marginLeft: 20 }}>
          <p style={{ padding: 0 }}>{truncate(moviedetails.overview, 200)}</p>
        </Column>
        <Columnss>
          <span style={{ fontSize: 16, display: "flex", color: "white" }}>
            <span>IMDb</span> : {moviedetails.vote_average}
          </span>
          <span
            style={{
              fontSize: 16,
              display: "flex",
              color: "white",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <span>Vote Count </span>: {moviedetails.vote_count}
          </span>
          <span style={{ fontSize: 16, display: "flex", color: "white" }}>
            <span>Release</span> : {moviedetails.release_date}
          </span>
          <span style={{ fontSize: 16, display: "flex", color: "white" }}>
            <span>Runtime</span> : {moviedetails.runtime} mins
          </span>
        </Columnss>
      </Rows>
      <br />
      <br />
      <div style={{ marginLeft: 20, color: "white" }}>
        <h1>Recommended</h1>
      </div>
      <Rrow>
        {rec.map((d) => (
          <Rcolumn
            onClick={() => {
              history.push(`/recommend/${d.id}${d.backdrop_path}/${d.title}`);
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
          </Rcolumn>
        ))}
      </Rrow>
      <br />
      <br />
      <div style={{ top: 60 }}>
        <h1
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 22,
            marginLeft: 20
          }}
        >
          Cast{" "}
        </h1>
        <Rowss style={{ margin: 5 }}>
          {cast.map((d) => (
            <Columns>
              <div className={classes.root2}>
                {d.profile_path ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://image.tmdb.org/t/p/w500/${d.profile_path}`}
                    className={classes.large}
                  />
                ) : (
                  <Avatar
                    alt="Remy Sharp"
                    src="data:image/jpeg;base64,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2kAkCAAAAAAkEATt3/EgE7QNhmZlhy/J6jvZXg3tstsfqtzNacvyFUccRRa5yC956L8GdQJqgAIAAAAFWwLHOM7P0ur/AG/8cDomic7zsX5VU/t/44FwfIABUAAAAABIHvCKSv8A7/vxseM5XdwIAAAAAGAelODuktr8P+wPMI9asZRdpa/r18p5yQEAAAAAP15Jf39H+bR+eJ1M5Zkj8/R/m0fnidRlKxNUnLtJR5pXPUgAAAULkNAVM/lXNZVqsqvpXHS0dXo72tFR236L9ZokiQMjwJXPvuvMOBK59915jXAtGR4Ern33XmHAlc++68xrgKMi8yVz77rzCnmelr9NLu0tXJ6xrZIiMbCjKPMpc++6W33iOBK59915jXAUZHgSuffdeYcCVz77rzGuAoyPAlc++68w4Ern33XmNcBRkeBK59915i0MzrO6ru6t+y26re0awhoUZl5ppu7q3fF91qXVpHi8yk/277rzGsSJFGR4Ern33XmHAlc++68xrgKMjwJXPvuvMOBK59915jXAUZXDZoqnUhP0zejOErejtfRkna+lq2GlSueko3CRASsSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
                    className={classes.large}
                  />
                )}
              </div>
              <h3 style={{ color: "white", fontSize: 16 }}>
                {" "}
                {d.original_name.split(" ")[0]}
              </h3>
            </Columns>
          ))}
        </Rowss>
      </div>
    </div>
  );
}
const Rows = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.5px;
  margin-right: 20px;
  justify-content: space-between;
  max-height: 100px;
`;
const Rowss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Column = styled.div`
  display: flex;
  padding-left: 10px;
  padding-top: 0px;
  align-items: center;

  width: 45%;
  flex-direction: column;
  border-left: 3px solid red;
`;
const Columnss = styled.div`
  padding-left: 10px;
  padding-top: 0px;

  border-left: 3px solid red;

  flex-direction: column;
`;
const Columns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rrow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Rcolumn = styled.div`
  display: flex;
  flex-direction: column;
`;
