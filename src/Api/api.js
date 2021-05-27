export default async function getMovies(page) {
  const response = await fetch(
    // Movies URL
    `http://api.themoviedb.org/3/discover/movie?api_key=28ae3e833077363150b565b2ab3160a7&page=${page}`,
    {}
  ).catch((e) => {
    console.log(e);
  });

  const json = await response.json();
  return json;
}
