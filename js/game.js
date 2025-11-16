"use strict";
import { CardData } from "./UI-Model.js";
import { GameDetails } from "./details.js";
//!============================== this class design for consume API (List of games by category name) ==============================!//
export class GameByCategoryName {
  getGameByCategoryName = async (categoryName = "mmorpg") => {
    try {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "301d64b5f5msh5e0064c37aaf3b3p1bf63cjsn4afa17e8191d",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`,
        options
      );
      const result = await response.json();
      const cardData = new CardData();
      cardData.clearContainer();
      result.forEach((element) => {
        const { id, thumbnail, title, short_description, genre, platform } =
          element;
        const cardData = new CardData();
        const card = cardData.CreateCrad(
          thumbnail,
          title,
          short_description.split(" ", 8).join(" "),
          genre,
          platform
        );
        card.addEventListener("click", async () => {
          const details = new GameDetails();
          await details.getGameDetails(id);
        });
        loading.classList.add("d-none");
      });
    } catch (error) {
      console.error(error);
    }
  };
}
