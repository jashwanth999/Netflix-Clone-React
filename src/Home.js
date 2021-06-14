import Row from "./Row";
import Navbar from "./Navbar";
import Header from "./Header";
export default function Home() {
  const data = [
    {
      name: "Trending",
      url:
        "https://api.themoviedb.org/3/trending/all/day?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US"
    },

    {
      name: "Toprated",
      url:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US"
    },
    {
      name: "Action",
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=28"
    },
    {
      name: "Binge-Worthy",
      url:
        "https://api.themoviedb.org/3/discover/tv?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genre=10"
    },
    {
      name: "Horror",
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=27"
    },
    {
      name: "Romance",
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=10749"
    },
    {
      name: "Documentaries",
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=99"
    }
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        paddingTop: 0,
        margin: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}
    >
      <Header />
      <Navbar />

      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        {data.map((d) => (
          <Row title={d.name} fetchUrl={d.url} />
        ))}
      </div>
    </div>
  );
}
