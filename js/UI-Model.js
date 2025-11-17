"use strict";
//!============================== Global variable (Local) for the class ==============================!//
const cardListContainerElement = document.getElementById("cardListContainer");

//!============================== this class design for Create the card and set data on it ==============================!//
export class CardData {
 static clearContainer = function () {
    while (cardListContainerElement.firstElementChild) {
      cardListContainerElement.removeChild(
        cardListContainerElement.firstElementChild
      );
    }
  };

 static CreateCrad = function (imageUrl, title, description, category, platform) {
    const columnContainer = document.createElement("div");
    columnContainer.classList = "col";

    const cardContainer = document.createElement("div");
    cardContainer.classList = "card h-100";
    columnContainer.append(cardContainer);

    const cardInner = document.createElement("div");
    cardInner.classList = "card-inner p-3";
    cardContainer.append(cardInner);

    const imageContainer = document.createElement("div");
    imageContainer.classList = "image";
    cardInner.append(imageContainer);

    const imageCard = document.createElement("img");
    imageCard.src = imageUrl;
    imageCard.classList = "card-img-top object-fit-cover h-100";
    imageCard.alt = "...";
    imageContainer.append(imageCard);

    const cardBodyContainer = document.createElement("div");
    cardBodyContainer.classList = "card-body px-0";
    cardInner.append(cardBodyContainer);

    const cardTitleContainer = document.createElement("div");
    cardTitleContainer.classList =
      "d-flex flex-wrap align-items-center justify-content-between mb-2";
    cardBodyContainer.append(cardTitleContainer);

    const cardTitle = document.createElement("h5");
    cardTitle.classList = "card-title h6 small mb-0 w-75";
    cardTitle.textContent = title;

    cardTitleContainer.append(cardTitle);

    const cardPrice = document.createElement("span");
    cardPrice.classList = "badge text-bg-primary p-2";
    cardPrice.textContent = "Free";
    cardTitleContainer.append(cardPrice);

    const cardDescription = document.createElement("p");
    cardDescription.classList = "card-text small text-center opacity-50";
    cardDescription.textContent = description;
    cardBodyContainer.append(cardDescription);

    const cardFooter = document.createElement("div");
    cardFooter.classList =
      "card-footer d-flex flex-wrap justify-content-between mt-auto";
    cardContainer.append(cardFooter);

    const cardCategory = document.createElement("span");
    cardCategory.classList = "badge my-badge-bg";
    cardCategory.textContent = category;
    cardFooter.append(cardCategory);

    const machineType = document.createElement("span");
    machineType.classList = "badge my-badge-bg";
    machineType.textContent = platform;
    cardFooter.append(machineType);

    cardListContainerElement.append(columnContainer);
    return columnContainer;
  };
}

//!============================== this class design for show and hide the game details ==============================!//
export class DetailsGame {
  static setDataInDetailsPage = function (
    imageURL,
    title,
    category,
    platform,
    status,
    description,
    dirctLink
  ) {
    const imageURLElement = document.querySelector("#detailsContent div img");
    imageURLElement.src = imageURL;

    const titleElement = document.querySelector("#detailsContent div h3");
    titleElement.textContent = `Title: ${title}`;

    const CategoryElement = document.querySelector(
      "#detailsContent div p:nth-child(2) span"
    );
    CategoryElement.textContent = category;

    const platformElement = document.querySelector(
      "#detailsContent div p:nth-child(3) span"
    );
    platformElement.textContent = platform;

    const statusElement = document.querySelector(
      "#detailsContent div p:nth-child(4) span"
    );
    statusElement.textContent = status;

    const descriptionElement = document.querySelector(
      "#detailsContent div p:nth-child(5)"
    );
    descriptionElement.textContent = description;

    const dirctLinkElement = document.querySelector("#detailsContent div a");
    dirctLinkElement.href = dirctLink;
  };
}
