import { authors } from "./data.js";

// preview.js
export function createPreview(book) {
    const preview = document.createElement("dl");
    preview.className = "preview";
    preview.dataset.id = book.id;
    preview.dataset.title = book.title;
    preview.dataset.image = book.image;
    preview.dataset.subtitle = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
    preview.dataset.description = book.description;
    preview.dataset.genre = book.genres;
  
    preview.innerHTML = /*html*/ `
      <div>
        <image class='preview__image' src="${book.image}" alt="book pic"/>
      </div>
      <div class='preview__info'>
        <dt class='preview__title'>${book.title}<dt>
        <dt class='preview__author'> By ${authors[book.author]}</dt>
      </div>`;
  
    return preview;
  }
  
  export function showPreviewDetails(event) {
    const overlay = document.querySelector("[data-list-active]");
    const title = document.querySelector("[data-list-title]");
    const subtitle = document.querySelector("[data-list-subtitle]");
    const description = document.querySelector("[data-list-description]");
    const image = document.querySelector("[data-list-image]");
    const imageBlur = document.querySelector("[data-list-blur]");
  
    if (event.target.dataset.id) {
      overlay.style.display = "block";
    }
  
    if (event.target.dataset.description) {
      description.innerHTML = event.target.dataset.description;
    }
  
    if (event.target.dataset.subtitle) {
      subtitle.innerHTML = event.target.dataset.subtitle;
    }
  
    if (event.target.dataset.title) {
      title.innerHTML = event.target.dataset.title;
    }
  
    if (event.target.dataset.image) {
      image.setAttribute("src", event.target.dataset.image);
      imageBlur.setAttribute("src", event.target.dataset.image);
    }
  }
  
  export function closePreview() {
    const overlay = document.querySelector("[data-list-active]");
    overlay.style.display = "none";
  }
  