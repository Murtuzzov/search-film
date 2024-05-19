const list = document.querySelector(".list");
const button = document.querySelector(".btn");
const input = document.querySelector(".input-text");

axios.defaults.headers.common["x-api-key"] =
  "cb342178-9e3a-46de-b338-06e41c2140f3";

const SEARCH_API =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const headers = {
  "Content-Type": "application/json",
};

button.addEventListener("click", async (event) => {
  event.preventDefault();
  const apiSearch = `${SEARCH_API}${input.value}`;
  if (input.value) {
    try {
      const response = await axios.get(apiSearch);
      console.log(response.data.films);

      list.innerHTML = "";

      response.data.films.slice(0, 3).forEach((element) => {
        const li = document.createElement("li");
        li.classList.add("list-item");
        li.innerHTML = ` <img src="${element.posterUrl}" alt="" width="250" height="350" />
            <p class="list-item__name">${element.nameRu}</p>
            <p class="list-item__rating">${element.year}</p>`;

        list.appendChild(li);
      });
    } catch (error) {
      console.log("error", error);
    }
  }
});
