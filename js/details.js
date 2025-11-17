"use strict";
import { DetailsGame } from "./UI-Model.js";

//!============================== Global variable (Local) for the class ==============================!//
const cardDetails = document.getElementById("cardDetails");
const closeDetails = document.getElementById("btnClose");
const mainSection = document.querySelector("body main section.py-5");
const navbarSection = document.querySelector(".my-navbar");

//!============================== this class design for consume API (Game Details) ==============================!//
export class GameDetails {
  getGameDetails = async (gameId) => {
    try {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      
      cardDetails.classList.remove("d-none");
      mainSection.classList.add("d-none");
      navbarSection.classList.add("d-none");
      
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "301d64b5f5msh5e0064c37aaf3b3p1bf63cjsn4afa17e8191d",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
        options
      );
      const result = await response.json();

      DetailsGame.setDataInDetailsPage(
        result.thumbnail,
        result.title,
        result.genre,
        result.platform,
        result.status,
        result.description,
        result.game_url
      );

      closeDetails.addEventListener("click", () => {
        mainSection.classList.remove("d-none");
        navbarSection.classList.remove("d-none");
        cardDetails.classList.add("d-none");
      });

      loading.classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  };
}
