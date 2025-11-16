"use strict";

import { GameByCategoryName } from "./game.js";

let gameByCategoryName = new GameByCategoryName();
await gameByCategoryName.getGameByCategoryName();

const links = document.querySelectorAll(
  "#navbarSupportedContent ul.navbar-nav li.nav-item a"
);
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", async () => {
    const gameByCategoryName = new GameByCategoryName();
    await gameByCategoryName.getGameByCategoryName(links[i].textContent.trim());
    disactiveLinks();
    links[i].classList.add("active");
  });
}

function disactiveLinks() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}
