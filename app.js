const mBar = document.querySelector("#menuBar");
const sideBar = document.querySelector(".sidebar");
const mClose = document.querySelector("#menuClose");
const bodyEle = document.querySelector("body");

mBar.addEventListener("click", () => {
    sideBar.style.display = "block";
    bodyEle.style.overflow = "hidden";
})
mClose.addEventListener("click", () => {
    sideBar.style.display = "none";
    bodyEle.style.overflow = "scroll";
})