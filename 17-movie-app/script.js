const mainElem = document.getElementById("main");

const form = document.querySelector(".inputForm");
const input = document.getElementById("search");

const DISCOVER_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab25dc692b3448d8d50185b9ec82b35e";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=ab25dc692b3448d8d50185b9ec82b35e&query="';
const options = {
  method: "GET",
};

const getMovies = async (URL) => {
  const response = await fetch(URL, options);
  const data = await response.json();
  return data.results;
};

const render = async (movies) => {
  mainElem.innerHTML = "";
  movies.forEach((movie) => {
    const rating = movie.vote_average;
    const html = `
        <div class="movie">
            <div class="image">
                <img src="${IMG_PATH + movie.poster_path + '"'}" alt="${
      movie.title
    }">
            </div>
            <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="rating ${
                      rating > 8 ? "green" : rating > 6 ? "orange" : "red"
                    }">
                        ${rating}
                    </span>
                    <div class="overview">
                        ${movie.overview}
                    </div>
            </div>
        </div>
        `;
    mainElem.insertAdjacentHTML("beforeend", html);
  });
};

const populateMovies = async (query) => {
  if (!query) {
    const movies = await getMovies(DISCOVER_URL);
    render(movies);
  } else {
    const searchURL = SEARCH_URL + query + '"';
    const movies = await getMovies(searchURL);
    render(movies);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = input.value;
  if (searchQuery && searchQuery !== "") {
    populateMovies(input.value);
    input.value = "";
  } else {
    window.location.reload();
  }
});

populateMovies();
