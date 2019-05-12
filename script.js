var littleMap = document.querySelector(".contacts-company__map-img");
var bigMap = document.querySelector(".modal__map");
var modalWriteUs = document.querySelector(".modal__write-us");
var writeUs = document.querySelector(".contacts-company__write-us");
var modalWriteUsClose = document.querySelector(".modal__write-us__close");

littleMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("modal__map__show");
});

bigMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   bigMap.classList.remove("modal__map__show");
});

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal__write-us__show");
});

modalWriteUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal__write-us__show");
});








